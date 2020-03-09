

let brush = "black"
let gameOver = false
let brushsize = 4

let img

function preload() {
 img = createImg('https://ak8.picdn.net/shutterstock/videos/1015902028/thumb/10.jpg')
 img.hide()
}

function setup() {
    // create a 640x480 pixel canvas and attach it to your HTML
    createCanvas(640, 480).parent('p5')
    print("this is the set up")
    background(0)
}


function createPixels(){
  //Create pixels variable to hold pixel starting/ending coordinates
  var h = canvas.height/10; //48
  var w = canvas.width/10;  //64

  var pixels = new Array(h);

  for (var i = 0; i < pixels.length; i++){
    pixels[i] = new Array(w);
  }

  for(var i = 0; i < h; i++){
    for(var j = 0; j < w; j++){
      pixels[i][j] = [10*i, 10*j, 10*(i+1), 10*(j+1)];
    }
  }

  return pixels;
}


function draw(pixels) {
  var pixels = createPixels();

  if (gameOver == true) {
    image(img,0,0, width, height)
    }
  else{

    if (mouseIsPressed && mouseX >= 0 && mouseY >= 0) {
      cursor(CROSS)

        if (brush == "red") {
          strokeWeight(brushsize)
          stroke (255,0,0)

           var hor =  parseInt(mouseX/10);
           var ver = parseInt(mouseY/10);

           var tLeftW = pixels[hor][ver][0];
           var tLeftH = pixels[hor][ver][1];
           var bRightW = pixels[hor][ver][2];
           var bRightH = pixels[hor][ver][3];

           fill(255,0,0)
           rect(tLeftW, tLeftH, 10, 10);
        }

        if (brush == "blue") {
          strokeWeight(brushsize)
          stroke (0,0,255)

          var hor =  parseInt(mouseX/10);
          var ver = parseInt(mouseY/10);

          var tLeftW = pixels[hor][ver][0];
          var tLeftH = pixels[hor][ver][1];
          var bRightW = pixels[hor][ver][2];
          var bRightH = pixels[hor][ver][3];

          fill(0,0,255)
          rect(tLeftW, tLeftH, 10, 10);
        }


        if (brush == "black") {
          stroke(0,0,0)
          //this is the thickness
          strokeWeight(brushsize)
          var hor =  parseInt(mouseX/10);
          var ver = parseInt(mouseY/10);

          var tLeftW = pixels[hor][ver][0];
          var tLeftH = pixels[hor][ver][1];
          var bRightW = pixels[hor][ver][2];
          var bRightH = pixels[hor][ver][3];

          fill(0,0,0)
          rect(tLeftW, tLeftH, 10, 10);
        }


        if (brush == "green") {
          stroke (0,128,0)
          //stroke(42,110,59)
          //this is the thickness
          strokeWeight(brushsize)

          var hor =  parseInt(mouseX/10);
          var ver = parseInt(mouseY/10);

          var tLeftW = pixels[hor][ver][0];
          var tLeftH = pixels[hor][ver][1];
          var bRightW = pixels[hor][ver][2];
          var bRightH = pixels[hor][ver][3];

          fill(0,255,0)
          rect(tLeftW, tLeftH, 10, 10);
        }

        if (brush == "yellow") {
          stroke(245,236,71)
          //this is the thickness
          strokeWeight(brushsize)

          var hor =  parseInt(mouseX/10);
          var ver = parseInt(mouseY/10);

          var tLeftW = pixels[hor][ver][0];
          var tLeftH = pixels[hor][ver][1];
          var bRightW = pixels[hor][ver][2];
          var bRightH = pixels[hor][ver][3];

          fill(245,236,71)
          rect(tLeftW, tLeftH, 10, 10);
      }

      if (brush == "brick") {
        stroke(80,45,25)
        //this is the thickness
        strokeWeight(brushsize)

        var hor =  parseInt(mouseX/10);
        var ver = parseInt(mouseY/10);

        var tLeftW = pixels[hor][ver][0];
        var tLeftH = pixels[hor][ver][1];
        var bRightW = pixels[hor][ver][2];
        var bRightH = pixels[hor][ver][3];

        fill(90,40,20)
        rect(tLeftW, tLeftH, 10, 10);

      }

      if (brush == "cement") {
        stroke(127,127,127)
        //this is the thickness
        strokeWeight(brushsize)

        var hor =  parseInt(mouseX/10);
        var ver = parseInt(mouseY/10);

        var tLeftW = pixels[hor][ver][0];
        var tLeftH = pixels[hor][ver][1];
        var bRightW = pixels[hor][ver][2];
        var bRightH = pixels[hor][ver][3];

        fill(178,178,178)
        rect(tLeftW, tLeftH, 10, 10);

      }

      if (brush == "babypink") {
        stroke(244,194,194)
        //this is the thickness
        strokeWeight(brushsize)

        var hor =  parseInt(mouseX/10);
        var ver = parseInt(mouseY/10);

        var tLeftW = pixels[hor][ver][0];
        var tLeftH = pixels[hor][ver][1];
        var bRightW = pixels[hor][ver][2];
        var bRightH = pixels[hor][ver][3];

        fill(233,194,194)
        rect(tLeftW, tLeftH, 10, 10);

      }


      if (brush == "skyblue") {
        stroke(135, 206, 235)
        //this is the thickness
        strokeWeight(brushsize)

        var hor =  parseInt(mouseX/10);
        var ver = parseInt(mouseY/10);

        var tLeftW = pixels[hor][ver][0];
        var tLeftH = pixels[hor][ver][1];
        var bRightW = pixels[hor][ver][2];
        var bRightH = pixels[hor][ver][3];

        fill(135, 206, 235)
        rect(tLeftW, tLeftH, 10, 10);

      }

      if (brush == "purple") {
        stroke(127,0,255)
        //this is the thickness
        strokeWeight(brushsize)

        var hor =  parseInt(mouseX/10);
        var ver = parseInt(mouseY/10);

        var tLeftW = pixels[hor][ver][0];
        var tLeftH = pixels[hor][ver][1];
        var bRightW = pixels[hor][ver][2];
        var bRightH = pixels[hor][ver][3];

        fill(150,3,255)
        rect(tLeftW, tLeftH, 10, 10);

      }


      if (brush == "white") {
        stroke(255,255,255)
        //this is the thickness
        strokeWeight(brushsize)

        var hor =  parseInt(mouseX/10);
        var ver = parseInt(mouseY/10);

        var tLeftW = pixels[hor][ver][0];
        var tLeftH = pixels[hor][ver][1];
        var bRightW = pixels[hor][ver][2];
        var bRightH = pixels[hor][ver][3];

        fill(255,255,255)
        rect(tLeftW, tLeftH, 10, 10);
      }

}
//keep at zero
stroke (0)
strokeWeight(2)
//box for tools
fill(255)
rect(0,0,50,480)
//above^

fill (255,7,58)
noStroke(0)
rect(10,10,30,30)

fill (0,0,255)
rect(10,50,30,30)

fill (0,0,0)
rect(10,90,30,30)

fill (42,110,59)
rect(10,130,30,30)

fill (245,236,71)
rect(10,170,30,30)

//brick
fill (80,45,25)
rect(10,210,30,30)

//cement
fill (127,127,127)
rect(10,250,30,30)

//baby pink
fill (244,194,194)
rect(10,290,30,30)

//skyblue
fill (135, 206, 235)
rect(10,330,30,30)

//purple
fill (127, 0, 255)
rect(10,370,30,30)

//white
stroke (0)
strokeWeight (2)
fill (255,255,255)
rect(10,410,30,30)


{
noFill()
stroke(255, 48, 190)
strokeWeight(12)
rect(0,0,640,480)
}

//control what buttons/squares do here
}}

function mouseClicked(){

  print (int(mouseX), int(mouseY))

  if(mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
    print("red button")
    brush = "red"
  }

  if(mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 80) {
    print("blue button")
    brush="blue"
  }

  if(mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 120) {
    print("black button")
    brush="black"
  }

  if(mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 160) {
    print("green button")
    brush="green"
  }

  if(mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 200) {
    print("yellow button")
    brush="yellow"
  }

  if(mouseX > 10 && mouseX < 40 && mouseY > 210 && mouseY < 240) {
    print("brick button")
    brush="brick"
  }
  if(mouseX > 10 && mouseX < 40 && mouseY > 250 && mouseY < 280) {
    print("cement")
    brush="cement"
  }

  if(mouseX > 10 && mouseX < 40 && mouseY > 290 && mouseY < 320) {
    print("babypink")
    brush="babypink"
  }

  if(mouseX > 10 && mouseX < 40 && mouseY > 330 && mouseY < 360) {
    print("skyblue")
    brush="skyblue"
  }

  if(mouseX > 10 && mouseX < 40 && mouseY > 370 && mouseY < 400) {
    print("purple")
    brush="purple"
  }

  if(mouseX > 10 && mouseX < 40 && mouseY > 410 && mouseY < 440) {
    print("white")
    brush="white"
  }

}

function keyPressed() {
   if (keyCode === 65) {
     gameOver=true
   }
   else if (keyCode === 68) {
     gameOver=true
   }

  if(key == "ArrowUp") {
    brushsize = brushsize+2
  }

  if(key == "ArrowDown") {
    brushsize = brushsize-2
  }
}
