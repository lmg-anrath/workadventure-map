import * as Config from '../configs/aufenthaltsraum.config.json';
import {Global, RegiterZone} from '../main';

//@comment: Test-Code
WA.onInit().then(async () => {

    //@region: global script execution
    Global()

    //@region: Zones Event Handler
    if (!Config) {
        console.log("[ERROR] : Config not found.");
        return;
    }

    //@region: Door-zone Event Handler
    RegiterZone(Config.Zones.doors);

})

console.log('aufenthaltsraum.ts is running');

export {};