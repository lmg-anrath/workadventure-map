(async () => {
    await WA.onInit();
    WA.chat.sendChatMessage(WA.room.id, 'Bot');
    WA.nav.goToRoom('../maps/map_test.tmj');
    WA.chat.onChatMessage((message => {
        if(message == 'hilfe') {
            WA.chat.sendChatMessage("helpmsg", "Bot");
        }
    }))
    //WA.nav.openTab('https://lmg-anrath.de/aktuelle_plaene/Vertretungsplan/heute/subst_001.htm');
})();
