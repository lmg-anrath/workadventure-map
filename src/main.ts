/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
//import lib from "./lib";
//import config from "./config";

console.log('Script started successfully');

WA.onInit().then(() => {
    WA.chat.sendChatMessage(WA.room.id, 'Bot');
    WA.chat.onChatMessage(message => {
        if(message == "fortnite") {
            WA.nav.goToRoom('../maps/map_test.tmj');
        }
    });
    console.log('Scripting API ready');
    console.log('Player tags: ', WA.player.tags);

   

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};
