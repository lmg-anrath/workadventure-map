import{G as r}from"./main-d0fc9531.js";const o={doors:{"eg-sek2-door-forum":"/_/global/maps.workadventure-lmg.de/maps/forum.tmj","eg-sek2-room-if1":"/_/global/maps.workadventure-lmg.de/maps/if1.tmj"}},s={Zones:o},l=Object.freeze(Object.defineProperty({__proto__:null,Zones:o,default:s},Symbol.toStringTag,{value:"Module"}));WA.onInit().then(async()=>{if(r(),!l){console.log("[ERROR] : Config not found.");return}console.log("json Config loaded"),Object.entries(o.doors).forEach(([e,n])=>{console.log(e,n),WA.room.area.onEnter(e).subscribe(()=>{console.log("entered zone"),WA.nav.goToRoom(n)})}),WA.room.area.onEnter("eg_sek2_monitor").subscribe(()=>{console.log("entered")})});console.log("sek2_eg.ts is running");
