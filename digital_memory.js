let tree;
let nest;
let thoughts=['we knew exactly where it was',
              'we tried to remember this place',
              'but somehow it slipped our digital memory',
              'it was difficult to spot it',
              'even in the physical days',
              'but we knew exactly where it was',
              'but still it remained unreachable to the digital view'
              
             ];
let memory;
let thought;
function preload(){
  //tree=loadImage("tree.jpg");
  nest=loadImage("data/bug.png");
    memory = createVideo('data/digitalmemory.mp4');



}

function setup() {
  createCanvas(windowWidth, innerHeight);
  memory.hide();
  //push();
  //tint(255, 200);
  //image(memory,0,0);
  //pop();
  //fill('white');
  //textSize(24);
  //textFont('monospace');
  // let thought=random(thoughts);
  //text(thought,width/2,height/2);
    thought=random(thoughts);

}

function draw() {
  //background(220);
    let memRatio=memory.width/memory.height;

   
  //angleMode(DEGREES);
  // push();
  //tint(255, 150);
  //scale(1.5);
  //rotate(random(2)*HALF_PI);

  imageMode(CENTER);
  // image(memory,0,0, windowWidth,windowWidth/memRatio);
  image(memory,width/2,height/2);

   pop();
  textAlign(CENTER);
  textFont('monospace');
  text(thought,mouseX,mouseY);
  fill(255);
  textSize(16);
  push();
  scale(0.2);
  tint(255, 126);
  image(nest,5*(mouseX+random(10)),5*mouseY) ;
    image(nest,5*(mouseX+random(10)),5*mouseY) ;

  image(nest,5*(mouseX-30+random(10)),5*(mouseY+random(10))) ;
  image(nest,5*(mouseX-30+random(10)),5*(mouseY+random(10))) ;
  image(nest,5*(mouseX-10+random(10)),5*(mouseY+30+random(10))) ;
image(nest,5*(mouseX-10+random(10)),5*(mouseY+30+random(10))) ;

  pop();

}

//function mouseClicked() {

//  // push();
//  // tint(255, 200);

//  image(memory,0,0);
//  // pop();
  
//  imageMode(CENTER);
//  //image(nest,width/2,height/2);
//  let thought=random(thoughts);
//  text(thought,width/2,height/2);
//  //text('we escaped in a bug of time',width/4,height/2+36);
  
//}
function mouseClicked(){
  memory.loop();
  thought=random(thoughts);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);  
  
}
