import{G as l}from"./main-4526d33b.js";const o={doors:{placeholder:""}},r={Zones:o},s=Object.freeze(Object.defineProperty({__proto__:null,Zones:o,default:r},Symbol.toStringTag,{value:"Module"}));WA.onInit().then(async()=>{if(l(),!s){console.log("[ERROR] : Config not found.");return}console.log("json Config loaded"),Object.entries(o.doors).forEach(([n,e])=>{console.log(n,e),WA.room.area.onEnter(n).subscribe(()=>{console.log("entered zone"),WA.nav.goToRoom(e)})})});console.log("room207.ts is running");
