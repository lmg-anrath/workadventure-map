/// <reference types="@workadventure/iframe-api-typings" />

console.log('Script started successfully');


// Waiting for the API to be ready
WA.onInit().then(() => {
    WA.nav.goToRoom('../Erdgeschoss.tmj');
}).catch(e => console.error(e));

export {};
