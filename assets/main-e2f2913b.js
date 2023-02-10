(async()=>(await WA.onInit(),WA.chat.sendChatMessage(WA.room.id,"Bot"),WA.nav.goToRoom("../maps/map_test.tmj"),WA.chat.onChatMessage(a=>{a=="hilfe"&&WA.chat.sendChatMessage("helpmsg","Bot")})))();
