let mySound,amplitudeSound;
let soundleft;
let soundright;
let vol;
let drops,imgRatio;
let imgMask;


function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('data/poulakia');
  soundleft = loadSound('data/zouzounisma');
  soundright = loadSound('data/stagonesright');
  drops=loadImage('data/blendpark.jpg');
  imgMask = loadImage('data/n2Mask.png'); 



}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  background(10);
    amplitudeSound = new p5.Amplitude();
    
   imgRatio=drops.width/drops.height;


}

function draw(){
  
  imageMode(CORNER);

  image(drops,0, 0,width,width/imgRatio);


  fill(255);
 

   vol = amplitudeSound.getLevel();
  let w = map(vol, 0, 1, 2, 50);

  imageMode(CENTER);

  let imgMaskRatio=imgMask.width/imgMask.height;
  image(imgMask, mouseX,mouseY,w*windowWidth,w*windowWidth/imgRatio);
}

function keyPressed() {
  if (keyCode === ENTER) {
    
    let fs = fullscreen();
    fullscreen(!fs);
  
  
  } else  {
  soundleft.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
    
     if (mySound.isPlaying()){
      mySound.pause();
    }else{
      mySound.loop();
    }
  //}
}
