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

        function heeftresultaat(){ 
            let resultaat=1;
            return resultaat;
        }
        let hetresultaat = heeftresultaat();
        console.log(hetresultaat);
        console.log(heeftresultaat());

       

        function ax2bcWiskunde(x,a,b,c) {
            let y = (a*(x*x) ) + (b*x) + c;
            return y;
        }

        let y1 = ax2bcWiskunde(9,3,4,89);
        console.log(y1);
        let y2 = ax2bcWiskunde(3,6,5,45);
        console.log(y2);
        let y3 = ax2bcWiskunde(7,1,2,13 );
        console.log(y3);
        
        function reken(u,h,l){
            let logY = Math.log(l) + h + Math.pow(u,2);
            return logY;
        }

        let yy = reken(4,21,6);
        console.log(yy);
        let yyy = reken(4,7,24);
        console.log(yyy);
        let yyyy = reken(2,1,6);
        console.log(yyyy);

    } 


}

let app = new App();
app.runApplication();



