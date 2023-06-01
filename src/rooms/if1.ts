import * as Config from '../configs/if1.config.json';

//@comment: Test-Code
WA.onInit().then(async () => {

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

console.log('if1.ts is running');

export {};