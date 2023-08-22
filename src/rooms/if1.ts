import * as Config from '../configs/if1.config.json';
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

    Object.entries(Config.Zones.doors).forEach(([zone, targetRoom]) => {
        console.log(zone, targetRoom);
        WA.room.area.onEnter(zone).subscribe(() => {
            console.log("entered zone");
            WA.nav.goToRoom(targetRoom);
        })
    })

})

console.log('if1.ts is running');

export {};