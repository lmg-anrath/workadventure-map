(async () => {
    await WA.onInit();
    WA.chat.sendChatMessage(WA.room.id, 'turkmenistan');
    WA.chat.onChatMessage((message => {
        if(message == 'hilfe') {
            WA.chat.sendChatMessage("helpmsg", "Hilfe");
        }
    }))
    //WA.nav.openTab('https://lmg-anrath.de/aktuelle_plaene/Vertretungsplan/heute/subst_001.htm');
    //WA.nav.goToRoom('localhost:3000/maps/map.json');
})();
