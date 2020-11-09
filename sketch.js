
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


Engine.update(engine);
function preload()
{

}

function setup() {
	createCanvas(700, 600);


	engine = Engine.create();
	world = engine.world;

ground = Bodies.rectangle(200,390,400,20);



World.add(world,ground);
 

ball1=new ball(300,490,50,50)

trash1=new trash(350,80,10,50)
trash2=new trash(450,70,20,50)



  Engine.run(engine);
  




  }
  



function draw() {
  background("gray");

 ball1.display();
 trash1.display();
 trash2.display();
  
  drawSprites();
 
}



