(async()=>(await WA.onInit(),WA.chat.sendChatMessage(WA.room.id,"turkmenistan"),WA.chat.onChatMessage(a=>{a=="hilfe"&&WA.chat.sendChatMessage("helpmsg","Hilfe")})))();
