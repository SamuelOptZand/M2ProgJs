class App {
    runApplication() {
        console.log("Hello world");
        
        let title = document.getElementById("newstitle");
        console.log(title);
        //dit is commentaar

        let random = Math.random();
        console.log(random);
        if(random < 0.2) {
            title.style.backgroundColor = "#FF0000";
        }
        else if(random > 0.2, random < 0.6){
            title.style.backgroundColor = "#0000FF";
        }
        else if(random > 0.6, random < 0.75){
            title.style.backgroundColor = "#F0FF0F";
        }
        else{
            title.style.backgroundColor = "#00FF00";
        }



        let newsitem1 = document.getElementById("gamenewsHeadline");
        let newsitem2 = document.getElementById("gamenews");

        console.log(newsitem1);
        console.log(newsitem2);


        
        if(random < 0.2) {
            newsitem1.style.backgroundColor = "#1F0160";
        }
        else if(random > 0.2, random < 0.6){
            newsitem1.style.backgroundColor = "#0F05FF";
        }
        else if(random > 0.6, random < 0.75){
            newsitem1.style.backgroundColor = "#F0660F";
        }
        else{
            newsitem1.style.backgroundColor = "#001130";
        }

        if(random < 0.2) {
            newsitem2.style.backgroundColor = "#684200";
        }
        else if(random > 0.2, random < 0.6){
            newsitem2.style.backgroundColor = "#6892FF";
        }
        else if(random > 0.6, random < 0.75){
            newsitem2.style.backgroundColor = "#F0470F";
        }
        else{
            newsitem2.style.backgroundColor = "#187933";
        }

    }
}

let app = new App();
app.runApplication();