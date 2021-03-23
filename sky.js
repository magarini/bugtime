let vid;
let tree;
let vid2;
let videoplaying;

function preload() {
  tree = loadModel('data/bug.obj');

}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  vid = createVideo(['data/night-time.mp4']);
  vid.elt.muted = true;
  vid.loop();
  vid.hide();
  vid2 = createVideo(['data/daytime.mp4']);
  vid2.elt.muted = true;
  vid2.loop();
  vid2.hide();
  videoplaying=vid;
}

function draw() {
  angleMode(DEGREES);
  background(0);
  sphere(2000);
    texture(videoplaying);
noStroke();
  orbitControl();
  for (i=1;i<5;i++){
  push();
   // normalMaterial(); // For effect
rotateZ(180);
rotateY(270);
scale(2);
//texture(vid2);
  translate(random(i*100),random(i*100),random(i*100));

  model(tree);
pop();
  }
}


function keyPressed(){
if(videoplaying==vid){
  videoplaying=vid2;
}else{
  videoplaying=vid;
}
}
//}
function mouseClicked(){
  vid.elt.muted = false;

}
