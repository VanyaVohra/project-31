const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var a;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16
var polygonImg;
var pentagon;
var slingshot;
var score;

function preload(){
polygonImg = loadImage("pentagon.png");
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;
  stroke(255)

  score = 0;
   
  var options = {
    density: 1
  }
   pentagon = Bodies.circle(50,200,30, options);
   World.add(world, pentagon);

   //level one
   block1 = new Block(300,275,30,40);
   block2 = new Block(330,275,30,40);
   block3 = new Block(360,275,30,40);
   block4 = new Block(390,275,30,40);
   block5 = new Block(420,275,30,40);
   block6 = new Block(450,275,30,40);
   block7 = new Block(480,275,30,40);
 
   //level two
   block8 = new Block(330,235,30,40);
   block9 = new Block(360,235,30,40);
   block10 = new Block(390,235,30,40);
   block11 = new Block(420,235,30,40);
   block12 = new Block(450,235,30,40);
 
   //level three
   block13 = new Block(360,195,30,40);
   block14 = new Block(390,195,30,40);
   block15 = new Block(420,195,30,40);
 
   //top
   block16 = new Block(390,155,30,40); 

   //ground
   ground = new Ground(400,780,800,20);
   ground2 = new Ground(400,300,300,20);
   ground3 = new Ground(700,200,300,20);

   //level one
   block17 = new Block(640,175,30,40);
   block18 = new Block(670,175,30,40);
   block19 = new Block(700,175,30,40);
   block20 = new Block(730,175,30,40);
   block21 = new Block(760,174,30,40);

   //level two
   block22 = new Block(670,135,30,40);
   block23 = new Block(700,135,30,40);
   block24 = new Block(730,135,30,40);

   //top
   block25 = new Block(700,95,30,40);

   slingshot = new SlingShot(this.pentagon, {x:100,y:200});
 
  a=height;
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(255); 
  Engine.update(engine);

  imageMode(CENTER);
  image(polygonImg, pentagon.position.x, pentagon.position.y, 30, 30);

  textSize(30);
  text("Score:"+score, 400, 50);
 

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  ground.display();
  ground2.display();
  ground3.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  
  slingshot.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();

  
  a=a-1;

}

function mouseDragged(){
  Matter.Body.setPosition(this.pentagon, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.pentagon);
  }
}
  