class App {
    runApplication() {
        function globalfunc() {
            console.log("ik ben global");
            console.log("dus je mag mij overal aanroepen");
        }

        globalfunc();

        function ArgumentS(shoutout) {
            console.log("do you want a shoutout?");
            console.log(shoutout);
        
        }
        ArgumentS("Super shout out");
        ArgumentS("shiwng whink");
        ArgumentS("shout out deez nuts");
    }


}

let app = new App();
app.runApplication();



