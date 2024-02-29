import * as Config from '../configs/sek2_eg.config.json';
import { Global, RegiterZone } from '../main';

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

    WA.room.area.onEnter('eg_sek2_monitor').subscribe(() => {
        console.log("entered")
    })
})

console.log('sek2_eg.ts is running');

export { };