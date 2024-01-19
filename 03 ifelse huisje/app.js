class App {
    runApplication() {
        
        let canvas = document.getElementById("canvasId");
        console.log(canvas);

        var g = canvas.getContext("2d");
        var color = "FFFFFF";
        
        

        

        console.log(color);

        let random = Math.random();
        console.log(random);

        if(random < 0.5) {
            color = "#FF0000";
        }
        else {
            color = "FF00FFF";
        }
        console.log(color);
        this.house(g, color);
    }




    house(g, color) {
        //dak
        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(30,10);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.closePath();
        g.stroke();
        g.fill();
        
        //voorkant
        g.beginPath();
        g.fillStyle = "#d4d4d4";
        g.moveTo(20,30);
        g.lineTo(60,40);
        g.lineTo(60,60);
        g.lineTo(20,50);
        g.closePath();
        g.stroke();
        g.fill();

        //rechts driehoek
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(60,40);
        g.lineTo(70,20);
        g.lineTo(80,30);
        g.closePath();
        g.stroke();
        g.fill();

        //rechts vierkant
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(80,30);
        g.lineTo(60,40);
        g.lineTo(60,60);
        g.lineTo(80,50);
        g.closePath();
        g.stroke();
        g.fill();
        
        //raam
        g.beginPath();
        g.fillStyle = color;
        g.moveTo(30,40);
        g.lineTo(50,45);
        g.lineTo(50,55);
        g.lineTo(30,50)
        g.closePath();
        g.stroke();
        g.fill();
        }
        
    }


let app = new App();
app.runApplication();