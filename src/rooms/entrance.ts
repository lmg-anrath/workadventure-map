import { log } from 'console';
import * as Config from '../configs/entrance.config.json';
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
			if (targetURL == "map") {
				async () => {
					WA.ui.modal.closeModal()
					const pos = await WA.player.getPosition()
					let mapOverviewPage = WA.ui.modal.openModal({
						src: `https://www.workadventure-lmg.de/map?x=${pos.x}&y=${pos.y}&map=`,
						allow: 'fullscreen',
						title: 'Karte des LMG',
						allowApi: true,
						position: 'center',
					})
					console.log(`map overview ${mapOverviewPage}`)
				}
			} else {
				WA.ui.modal.openModal({
					title: "Haupteingang",
					src: targetURL,
					allow: "fullscreen",
					allowApi: true,
					position: "center",
				})
			}
        })

        WA.room.area.onLeave(zone).subscribe(() => {
            console.log("left zone");
            WA.ui.modal.closeModal();
        })
    })

})

console.log('entrance.ts is running');

export {};