



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;











function preload()
{

}

function setup() {
	createCanvas(1600, 650);


	engine = Engine.create();
	world = engine.world;

ground = Bodies.rectangle(800,560,1600,20,{isStatic:true})

World.add(world,ground);
 

ball1=new ball(300,490,20)

trash1=new trash(750,500,20,80)
trash2=new trash(900,540,300,20)
trash3=new trash(1050,500,20,80)


  Engine.run(engine);

  }

function draw() {
  background("gray");
  rectMode(CENTER);
rect(ground.position.x,ground.position.y,1600,20)
 ball1.display();

 trash1.display();
 trash2.display();
 trash3.display();
  
  //drawSprites();


  
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    
    
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  }
}
