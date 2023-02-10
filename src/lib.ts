class popup {
    current: any;
    buttons: any;
    constructor(type: string, text: string, buttons: any) {
        this.buttons = buttons;
        if (this.buttons === undefined || this.buttons === null) {
            this.buttons = [];
        }        
        this.current = WA.ui.openPopup(type, text, this.buttons);
    }

    close() {
        if (this.current !== undefined) {
            this.current.close();
            this.current = undefined;
        }
    }
}

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
    },

    createNewPopup:function(type: string, text: string, buttons: any) {
        return new popup(type, text, buttons);
    },
}

export default lib;