import{G as r}from"./main-1e28fe25.js";const o={doors:{eg_forum_door_entrance:"/_/global/maps.workadventure-lmg.de/maps/entrance.tmj#forumDoor",eg_forum_door_sek2:"/_/global/maps.workadventure-lmg.de/maps/sek2_eg.tmj"}},s={Zones:o},l=Object.freeze(Object.defineProperty({__proto__:null,Zones:o,default:s},Symbol.toStringTag,{value:"Module"}));WA.onInit().then(async()=>{if(r(),!l){console.log("[ERROR] : Config not found.");return}console.log("json Config loaded"),Object.entries(o.doors).forEach(([e,n])=>{console.log(e,n),WA.room.area.onEnter(e).subscribe(()=>{console.log("entered zone"),WA.nav.goToRoom(n)})})});console.log("forum.ts is running");