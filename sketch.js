const Engine = Matter.Engine;
 const Render = Matter.Render;
 const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint
 const Body = Matter.Body;
 const Composites = Matter.Composites;
  const Composite = Matter.Composite;
  var engine
  var world
  var balloon,blowwer,blowermouth,button;


function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  balloon = new Ball(440,200,50,50);
  blowwer = new Blower(400,250,100,100)
  blowermouth = new Blower(300,300,150,15)
  button = createButton("click to blow")
  button.position(500,500)
  button.mousePressed(blow)
  

  

}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  balloon.show();
  blowwer.show();
  console.log(mouseX,mouseY);
  blowermouth.show();
}

function blow(){
  Matter.Body.applyForce(balloon.body,{x:0,y:0},{x:0,y:0.05})
  
}