class Umbrella{
    constructor(x,y){
    var options={
        isStatic:true,
    }
    this.body = Bodies.circle(x,y,40,options);
    this.image = loadImage("images/Walking Frame/walking_1.png")
    World.add(world, this.body);
    }
display(){
    var pos = this.body.position;
   imageMode(CENTER);
   image(this.image,pos.x,pos.y);


}
}


