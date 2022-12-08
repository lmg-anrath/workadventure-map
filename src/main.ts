/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import lib from "./lib";

console.log('Script started successfully');

let pop: any = null;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ', WA.player.tags)

    WA.room.onEnterLayer('clockZone').subscribe(() => {
        const time = lib.getCurrentTime();
        pop = lib.createNewPopup("clockPopup", "Es ist aktuell: " + time, null);
        // WA.nav.goToRoom("./map_test.json") // Change Map
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
