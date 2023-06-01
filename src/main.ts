/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { bootstrapExtra } from "@workadventure/scripting-api-extra";
//@ts-ignore
import {Wait} from './common/functions';
import * as Config from './configs/config.json';

console.log('Script started successfully');

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
            WA.nav.goToRoom(targetRoom);
        })
    })



}).catch(e => console.error(e));

export {};