/*
 * @name Load and Display Image
 * @description Images can be loaded and displayed to the screen at their
 * actual size or any other size.
 * <p><em><span class="small"> To run this example locally, you will need an 
 * image file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">
 * local server</a>.</span></em></p>
 
 */
let img; // Declare variable 'img'.
let imgLeft, imgRight; // Declare variable 'img'.

let imgMask;
let imgRatio;
let imgOnRatio=[];
let imgOndisplay=[];
let imgX=[];
let imgY=[];
let x1=0;x2=1;x3=2,x4=3;


function preload() {
  //img = loadImage('data/skalakia.jpg'); // Load the image
  //imgRight = loadImage('data/treeleft.jpg'); // Load the image

  //imgMask = loadImage('data/n2Mask.png'); // Load the image
  for (let i=0; i<15; i++) {
    imgX[i]=loadImage('data/bug'+i+'.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(0);
  imgOndisplay=imgX;
  imageMode(CENTER);
}

function draw() {
  //background(255);
  //imgRatio=imgMask.width/imgMask.height;
  imgOnRatio[x1]=imgOndisplay[x1].width/imgOndisplay[x1].height;
  imgOnRatio[x2]=imgOndisplay[x2].width/imgOndisplay[x2].height;
  imgOnRatio[x3]=imgOndisplay[x3].width/imgOndisplay[x3].height;
  imgOnRatio[x4]=imgOndisplay[x4].width/imgOndisplay[x4].height;


 // let imgMaskRatio=imgMask.width/imgMask.height;

  // Displays the image at its actual size at point (0,0)
  image(imgOndisplay[x1], width/2, height/2, windowWidth, windowWidth/imgOnRatio[x1]);
  image(imgOndisplay[x2], width/2, height/2, windowWidth, windowWidth/imgOnRatio[x2]);
  image(imgOndisplay[x3], width/2, height/2, windowWidth, windowWidth/imgOnRatio[x3]);
  image(imgOndisplay[x4], width/2, height/2, windowWidth, windowWidth/imgOnRatio[x3]);


  //image(imgMask, mouseX, mouseY, 5*windowWidth, 5*windowWidth/imgRatio);
}

function mousePressed() {
  //let newimg=random(imgX);
  imgOndisplay[x1]=random(imgX);
  imgOndisplay[x2]=random(imgX);
  imgOndisplay[x3]=random(imgX);
  imgOndisplay[x4]=random(imgX);


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function keyPressed() {
  //if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
  if (keyCode === ENTER) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
