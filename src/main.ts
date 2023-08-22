/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { bootstrapExtra } from "@workadventure/scripting-api-extra";
//@ts-ignore
import {Wait} from './common/functions';
import * as Config from './configs/config.json';

console.log('Script started successfully');

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
        console.log('json Config loaded');
    
        //@region: Door-zone Event Handler 
        Object.entries(Config.Zones.doors).forEach(([zone, targetRoom]) => {
            console.log(zone, targetRoom);
            WA.room.area.onEnter(zone).subscribe(() => {
                console.log("entered zone");
                WA.nav.goToRoom(targetRoom);
            })
        })

        //@region: Tests
        WA.ui.actionBar.addButton({
            id: 'button_1',
            label: 'Vertretungsplan',
            callback: (event) => {
                console.log(event);

                WA.ui.modal.openModal({
                    title: "Vertretungsplan",
                    src: 'https://m1kx.github.io',
                    allow: "fullscreen",
                    allowApi: true,
                    position: "right",
                })
            }
        });
        
        WA.ui.actionBar.addButton({
            id: 'map-button',
            // @ts-ignore
            type: 'action',
            imageSrc: 'https://hugoaverty.github.io/map-overview/img/map.svg',
            toolTip: 'Sehe die Karte an!',
            callback: async (event) => {
                WA.ui.modal.closeModal();
                const pos = await WA.player.getPosition();
                let mapOverviewPage = WA.ui.modal.openModal({
                    src: `https://www.workadventure-lmg.de/map/index.html?x=${pos.x}&y=${pos.y}`,
                    allow: 'fullscreen',
                    title: 'Karte des LMG',
                    allowApi: true,
                    position: 'center',
                })
                console.log(`map overview ${mapOverviewPage}`)
            }
        })
    }).catch(e => console.error(e));
}

Global();