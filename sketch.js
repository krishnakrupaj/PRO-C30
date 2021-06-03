const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world,polygon,sling
var ground,stage1,stage2
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21
var b22,b23,b24,b25,b26,b27
var rock,score = 0
function preload() {

 rock = loadImage("rockkk.png");
  
}

function setup() {
  
  var canvas = createCanvas(800,400);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(395,400,800,10);
    stage1 = new Ground(400,360,200,20);
    stage2 = new Ground(612.5,255,125,10);

    //row 1
    b1 = new Box(337.5,337.5,25,25);
    b2 = new Box(362.5,337.5,25,25);
    b3 = new Box(387.5,337.5,25,25);
    b4 = new Box(412.5,337.5,25,25);
    b5 = new Box(437.5,337.5,25,25);
    b6 = new Box(462.5,337.5,25,25);
    //row 2
    b7  = new Box(350,312.5,25,25);
    b8  = new Box(375,312.5,25,25);
    b9  = new Box(400,312.5,25,25);
    b10 = new Box(425,312.5,25,25);
    b11 = new Box(450,312.5,25,25);
    //row 3
    b12 = new Box(362.5,287.5,25,25);
    b13 = new Box(387.5,287.5,25,25);
    b14 = new Box(412.5,287.5,25,25);
    b15 = new Box(437.5,287.5,25,25);
    //row 4
    b16 = new Box(375,262.5,25,25);
    b17 = new Box(400,262.5,25,25);
    b18 = new Box(425,262.5,25,25);
    //row 5
    b19 = new Box(387.5,237.5,25,25);
    b20 = new Box(412.5,237.5,25,25);
    //row 6
    b21 = new Box(400,212.5,25,25);

    //stage2
    //row 1
    b22 = new Box(587.5,237.5,25,25);
    b23 = new Box(612.5,237.5,25,25);
    b24 = new Box(637.5,237.5,25,25);
    //row 2
    b25 = new Box(600,212.5,25,25);
    b26 = new Box(625,212.5,25,25);
    //row 3
    b27 = new Box(612.5,187.5,25,25);

    //slingShot
    polygon = Bodies.circle(75,350,30);
    World.add(world,polygon);

    sling = new SlingShot(this.polygon,{x:100,y:350});
   
}

function draw() {
  background(200,255,200);
  Engine.update(engine);
  ground.display();
 
  //block tower 1
  stage1.display();
  //row1
  fill("indigo")
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  //row2
  fill("blue")
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  //row3
  fill(" green")
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  //row4
  fill("yellow")
  b16.display();
  b17.display();
  b18.display();
  //row5
  fill("orange")
  b19.display();
  b20.display();
  //row6
  fill("red")
  b21.display();

  //block tower 2
  stage2.display();
  fill("lightblue")
  b22.display();
  
  fill("blue")
  b23.display();
  
  fill("darkblue")
  b24.display();
  
  fill("skyblue")
  b25.display();
  fill("aqua")
  b26.display();
  
  fill("bluegreen")
  b27.display();
  //block 1
  b1.score();b2.score();b3.score();b4.score();b5.score();b6.score();
  b7.score();b8.score();b9.score();b10.score();b11.score();
  b12.score();b13.score();b14.score();b15.score();
  b16.score();b17.score();b18.score();
  b19.score();b20.score();
  b21.score();

  //block 2
  b22.score();b23.score();b24.score();
  b25.score();b26.score();
  b27.score();

  imageMode(CENTER);
  image(rock,polygon.position.x,polygon.position.y);
  
  //rock
  sling.display();

  drawSprites();
  fill(255,100,1);
    textSize(50);
    textFont("Times New Roman");
    text("SCORE:"+score,200, 60);
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){if(keyCode===32){sling.attach(this.polygon)}}