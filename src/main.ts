/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import * as fs from 'fs';
//import lib from "./lib";
//import config from "./config";

console.log('Script started successfully');

WA.onInit().then(() => {
    WA.chat.sendChatMessage('Willkommen!', 'Bot');
    WA.chat.onChatMessage(message => {
        // Ich habe hier Versucht ein Filter einzubauen es wurde aber noch nicht getestet. 
        // Ich weiß um ehrlich zu sein auch nicht ob Workadventure schon was integriertes hat. 
        const data = fs.readFileSync('./data/badwords.json', 'utf8');
        const obj = JSON.parse(data);
        let words = obj.deutsch;
        for (let i = 0; i < words.length; i++) {
            if (message === words[i]) {
                console.log('Bad Word Detected!')
            }
        }
        words = obj.english;
        for (let i = 0; i < words.length; i++) {
            if (message === words[i]) {
                console.log('Bad Word Detected!')
            }
        }
    });
    console.log('Scripting API ready');
    console.log('Player tags: ', WA.player.tags)

   
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};
