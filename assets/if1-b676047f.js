import{G as r}from"./main-d0fc9531.js";const n={ressources:{if1_pdf_if_curriculum:"https://maps.workadventure-lmg.de/ressources/Schulinterner_Lehrplan_Informatik.pdf",if1_pdf_if_sek1_content:"https://www.wetterstation-lmg.de/"},doors:{door_sek2:"/_/global/maps.workadventure-lmg.de/maps/sek2_eg.tmj"}},s={Zones:n},t=Object.freeze(Object.defineProperty({__proto__:null,Zones:n,default:s},Symbol.toStringTag,{value:"Module"}));WA.onInit().then(async()=>{if(r(),!t){console.log("[ERROR] : Config not found.");return}console.log("json Config loaded"),Object.entries(n.doors).forEach(([o,e])=>{console.log(o,e),WA.room.area.onEnter(o).subscribe(()=>{console.log("entered zone"),WA.nav.goToRoom(e)})}),Object.entries(n.ressources).forEach(([o,e])=>{WA.room.area.onEnter(o).subscribe(()=>{console.log("entered zone"),WA.ui.modal.openModal({title:"IF1",src:e,allow:"fullscreen",allowApi:!0,position:"right"})})})});console.log("if1.ts is running");
