import{G as t}from"./main-9e58826f.js";const o={doors:{exit:"/_/global/maps.workadventure-lmg.de/maps/sek1.tmj"}},l={Zones:o},s=Object.freeze(Object.defineProperty({__proto__:null,Zones:o,default:l},Symbol.toStringTag,{value:"Module"}));WA.onInit().then(async()=>{if(t(),!s){console.log("[ERROR] : Config not found.");return}console.log("json Config loaded"),Object.entries(o).forEach(([n,e])=>{console.log(n,e)})});console.log("entrance.ts is running");