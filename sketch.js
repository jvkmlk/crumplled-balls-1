
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
dustbin1;
dustbin2;
dustbin3;
var paper;
var ground;

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
  rectMode(CENTER);
  dustbin1 = new Dustbin(700,685,160,20., {isStatic:true} );
	dustbin2= new Dustbin(770,680,20,300);
	dustbin3= new Dustbin(620,680,20,300);


 paper=new Paper (100,300,10);
ground = new Ground(600,height,3000,20);


	//Create the Bodies Here.

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  textSize(50);
  text ("Press Space to serve",100,50);

  
  drawSprites();
 
}
function keyPressed()  {
  if (keyCode ===32){
Body.applyForce(paper.body,paper.body.position,{x:10,y:-20});
  }
}



