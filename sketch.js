const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var logs=[];
var plinkos=[];

var particles=[];

function preLoad(){
  
}


function setup() {
  createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;
  
  ground= new Ground(400,690,800,10);
  //log1= new Log()
  
for (var index = 5; index < 800; index=index+80) {
  logs.push(new Log(index,560,10,250))
  
}
for (var index = 15; index < 800; index=index+50) {
  plinkos.push(new Plinko(index,100,10))
  
}
for (var index = 35; index < 750; index=index+50) {
  plinkos.push(new Plinko(index,200,10))
  
}
for (var index = 15; index < 800; index=index+50) {
  plinkos.push(new Plinko(index,300,10))
  
}
  
}

function draw() {
  background(0,0,0);
  Engine.update(engine)
  text(mouseX+" "+mouseY,mouseX,mouseY)
  ground.display(); 
   for (let index = 0; index < logs.length; index++) {
    // const element = array[index];
    logs[index].display()
     
   }
   for (let index = 0; index < plinkos.length; index++) {
    // const element = array[index];
    plinkos[index].display()
     
   }  
   
  if (frameCount%30===0) {
    particles.push(new Particle(random(20,750),0,8))
  }
  for (var index = 0; index < particles.length; index++) {
    //plinkos.push(new Plinko(index,300,10))
    particles[index].display()
    
  }

 // drawSprites();
}
