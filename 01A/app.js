class App {
    runApplication() {
        this.greeting = "starting up";
        this.appNaam = "gaysex";
        this.versieNummer = 1;
        this.versieDatum = Date=1;
        this.Autheur = "john pork";
        this.copyright = "Samuel";
        this.distributeur = "emporkium";
        this.darkmode = true;

        this.boolean = true;
        this.string = "hello world";
        this.nummer = 4;
        console.log(this.darkmode);
    }
}

let app = new App();
app.runApplication();


console.log(app.greeting, app.appNaam, app.versieNummer, app.versieDatum, app.Autheur, app.copyright, app.distributeur, app.darkmode);
console.log(app.boolean, app.string, app.nummer);
