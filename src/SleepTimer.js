// NAME: SleepTimer
// AUTHOR: p0rtL
// DESCRIPTION: Shuts off your music automatically on a timer

(function SleepTimer() {
    // Checks if Spicetify's local storage is available; closes and restarts the function if not.
    if (!Spicetify.LocalStorage) {
        setTimeout(SleepTimer, 1000);
        return;
    }

    let isEnabled = Spicetify.LocalStorage.get("SleepTimer") === "1";

    var TimeToSleep;

    let min5 = new Spicetify.Menu.Item("5 Minutes", isEnabled, (self) => {
        let TimeToSleep = 5;
        isEnabled = !isEnabled;
        Spicetify.LocalStorage.set("5 Minutes", isEnabled ? "1" : "0");
        self.setState(isEnabled);
        timeset(TimeToSleep);
    })

    let min10 = new Spicetify.Menu.Item("10 Minutes", isEnabled, (self) => {
        let TimeToSleep = 10;
        isEnabled = !isEnabled;
        Spicetify.LocalStorage.set("10 Minutes", isEnabled ? "1" : "0");
        self.setState(isEnabled);
        timeset(TimeToSleep);
    })

    let min15 = new Spicetify.Menu.Item("15 Minutes", isEnabled, (self) => {
        let TimeToSleep = 0.5;
        isEnabled = !isEnabled;
        Spicetify.LocalStorage.set("15 Minutes", isEnabled ? "1" : "0");
        self.setState(isEnabled);
        timeset(TimeToSleep);
    })

    let min30 = new Spicetify.Menu.Item("30 Minutes", isEnabled, (self) => {
        let TimeToSleep = 30;
        isEnabled = !isEnabled;
        Spicetify.LocalStorage.set("30 Minutes", isEnabled ? "1" : "0");
        self.setState(isEnabled);
        timeset(TimeToSleep);
    })

    let min45 = new Spicetify.Menu.Item("45 Minutes", isEnabled, (self) => {
        let TimeToSleep = 45;
        isEnabled = !isEnabled;
        Spicetify.LocalStorage.set("45 Minutes", isEnabled ? "1" : "0");
        self.setState(isEnabled);
        timeset(TimeToSleep);
    })

    let min60 = new Spicetify.Menu.Item("1 Hour", isEnabled, (self) => {
        let TimeToSleep = 60;
        isEnabled = !isEnabled;
        Spicetify.LocalStorage.set("1 Hour", isEnabled ? "1" : "0");
        self.setState(isEnabled);
        timeset(TimeToSleep);
    })

    let min120 = new Spicetify.Menu.Item("2 Hours", isEnabled, (self) => {
        let TimeToSleep = 120;
        isEnabled = !isEnabled;
        Spicetify.LocalStorage.set("2 Hours", isEnabled ? "1" : "0");
        self.setState(isEnabled);
        timeset(TimeToSleep);
    })

    let SleepTimeArray = [min5, min10, min15, min30, min45, min60, min120]

    new Spicetify.Menu.SubMenu("Sleep Timer", SleepTimeArray, (self) =>{

    }).register();

    function timeset(TimeToSleep) {
        setTimeout(function() {
            cleartime()
            pause(); 
        }, TimeToSleep * 60000);
    }

    function cleartime() {
        min5.setState(null);
        min10.setState(null);
        min15.setState(null);
        min30.setState(null);
        min45.setState(null);
        min60.setState(null);
        min120.setState(null);
    }

    function pause() {
        Spicetify.Player.pause()
    }

})()
