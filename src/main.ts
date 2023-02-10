/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import lib from "./lib";
import config from "./config";

console.log('Script started successfully');

let pop: any = null;

// Waiting for the API to be ready
WA.onInit().then(() => {
    // WA.nav.goToRoom(config.test_map) // Change Map
    console.log('Scripting API ready');
    console.log('Player tags: ', WA.player.tags)

    let myDialog:any = <any>document.getElementById("myDialog");
    myDialog.showModal();
    WA.room.onEnterLayer('clockZone').subscribe(() => {
        const time = lib.getCurrentTime();
        pop = lib.createNewPopup("clockPopup", "Es ist aktuell: " + time, null);
    })

    WA.room.onLeaveLayer('clockZone').subscribe(() => {
        pop.close();
    })

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));


export {};
