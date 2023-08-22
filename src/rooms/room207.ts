import * as Config from '../configs/room207.config.json';
import {Global} from '../main';

//@comment: Test-Code
WA.onInit().then(async () => {

    //@region: global script execution
    Global()

    //@region: Zones Event Handler
    if (!Config) {
        console.log("[ERROR] : Config not found.");
        return;
    }
    console.log('json Config loaded');

    Object.entries(Config.Zones).forEach(([key, value]) => {
        console.log(key, value);
    })

})

console.log('room207.ts is running');

export {};