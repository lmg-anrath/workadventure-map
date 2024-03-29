import * as Config from '../configs/if1.config.json';
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

    Object.entries(Config.Zones.ressources).forEach(([zone, targetURL]) => {
        WA.room.area.onEnter(zone).subscribe(() => {
            console.log("entered zone");
            WA.ui.modal.openModal({
                title: "IF1",
                src: targetURL,
                allow: "fullscreen",
                allowApi: true,
                position: "center",
            })

            const playerCoords: any = WA.player.getPosition();
            WA.camera.set(playerCoords.x, playerCoords.y, 100, 100, false, true)
        })

        WA.room.area.onLeave(zone).subscribe(() => {
            console.log("left zone");
            WA.ui.modal.closeModal();
        })
    })
})

console.log('if1.ts is running');

export {};