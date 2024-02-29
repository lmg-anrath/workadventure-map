/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import * as Config from './configs/config.json';
import { Zone } from "./types/zone";

export function Global() {
    WA.onInit().then(async () => {
        //@region: WA Boilerplate
        bootstrapExtra().then(() => {
            console.log('Scripting API Extra ready');
        }).catch(e => console.error(e));
    
        //@region: Zones Event Handler
        if (!Config) {
            console.log("[ERROR] : Config not found.");
            return;
        }
    
        //@region: Door-zone Event Handler 
        Object.entries(Config.Zones.doors).forEach(([zone, targetRoom]) => {
            WA.room.area.onEnter(zone).subscribe(() => {
                WA.nav.goToRoom(targetRoom);
            })
        })

        //@region: Tests
        WA.ui.actionBar.addButton({
            id: 'button:vertretungsplan',
            label: 'Vertretungsplan',
            callback: () => {
                WA.ui.modal.openModal({
                    title: "Vertretungsplan",
                    src: 'https://lmg-anrath.de/aktuelle_plaene/Vertretungsplan/heute/',
                    allow: "fullscreen",
                    allowApi: true,
                    position: "right",
                })
            }
        })
        
        WA.ui.actionBar.addButton({
            id: 'button:mikaplan',
            label: 'EVA Plan (Individuell)',
            callback: () => {
                WA.ui.modal.openModal({
                    title: "Vertretungsplan",
                    src: 'https://bot.mikaco.de/',
                    allow: "fullscreen",
                    allowApi: true,
                    position: "right",
                })
            }
        })
        
        WA.ui.actionBar.addButton({
            id: 'button:map',
            type: 'action',
            imageSrc: 'https://www.workadventure-lmg.de/map.svg',
            toolTip: 'Öffne die Karte',
            callback: async (event) => {
                console.log('map event ', event)
                WA.ui.modal.closeModal()
                const pos = await WA.player.getPosition()
                let mapOverviewPage = WA.ui.modal.openModal({
                    src: `https://www.workadventure-lmg.de/map?x=${pos.x}&y=${pos.y}&map=`,
                    allow: 'fullscreen',
                    title: 'Karte des LMG',
                    allowApi: true,
                    position: 'center',
                })
                console.log(`map overview ${mapOverviewPage}`)
            }
        })
    }).catch(e => console.error(e))
}

export function RegiterZone(Zone: Zone) {
    if (!Zone) {
        return console.error("Keine Config gefunden! Zone:", Zone)
    }

    Object.entries(Zone).forEach(([zone, targetRoom]) => {
        WA.room.area.onEnter(zone).subscribe(() => {
            WA.nav.goToRoom(`/_/global/${Config.dev ? "test" : "maps"}.workadventure-lmg.de/maps/` + targetRoom);
        })
    })
}

Global();