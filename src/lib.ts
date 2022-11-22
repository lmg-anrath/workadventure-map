let lib = {
    getCurrentTime:function() {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        return time;
    },

    openWebsiteInNewTab:function(site: string) {
        if (typeof(site) != "string") {
            console.log("Input Type should be string!")
            return;
        }   
        if (site === undefined || site === null) {
            console.log("Can't open an undefined site!")
            return;
        }
        WA.nav.openTab(site);
    },
    
    changeEnv:function(envPath: string) {
        if (typeof(envPath) != "string") {
            console.log("Input Type should be string!")
            return;
        }   
        if (envPath === undefined || envPath === null) {
            console.log("Can't open an undefined envPath!")
            return;
        }
        WA.nav.goToRoom(envPath);
    }
}

export default lib;