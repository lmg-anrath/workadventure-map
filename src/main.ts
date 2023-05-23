// @ts-ignore
/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

// @ts-ignore
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

// let currentPopup: any = undefined;

// Waiting for the API to be ready
// @ts-ignore
WA.onInit().then(() => {
    // @ts-ignore
    WA.nav.goToRoom('/_/global/maps.workadventure-lmg.de/maps/conference.tmj');

    // Create a new website object

    // console.log('Scripting API ready');
    // console.log('Player tags: ',WA.player.tags)

    // WA.room.area.onEnter('clock').subscribe(() => {
    //     const today = new Date();
    //     const time = today.getHours() + ":" + today.getMinutes();
    //     currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    // })

    // WA.room.area.onLeave('clock').subscribe(closePopup)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    // @ts-ignore
    }).catch(e => console.error(e));
// @ts-ignore
}).catch(e => console.error(e));

// function closePopup(){
//     if (currentPopup !== undefined) {
//         currentPopup.close();
//         currentPopup = undefined;
//     }
// }

export { };

