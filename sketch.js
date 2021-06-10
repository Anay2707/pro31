const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops = 100;
var drops = [];

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;

    umbrella=new Umbrella(100,400)
    
  if(frameCount%20===0){
    for(var i=0;i<maxDrops;i++){
      drops.push(new Drops (random(0,400),random(0,400)))
    }
  }

  rand = Math.round(random(1,4));  
  if(frameCount%80 ===0){
    thunderCreatedFrame=frameCount;
    thunder=createSprite(random(10,370),random(10,30),random(10,30),10,10);
    switch(rand){
      case 1 :thunder.addImage(thunder1);
      break;
      case 2 :thunder.addImage(thunder2);
      break;
      case 3 :thunder.addImage(thunder3);
      break;
      case 4 :thunder.addImage(thunder4);
      break;
      default:break;
    }
    thunder.scale = random(0.3,0.6)
  }

}

function draw(){
    background(0);
  Engine.update(engine);

  for(var i = 0;i<maxDrops;i++){
    drops[i].display();
    drops[i].updateY();
  }

  umbrella.display();

  drawSprites();
    
}   

