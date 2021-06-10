class Drops{
    constructor(x,y,){
        var options = {
            friction:0.1
        }
        this.r = 5;
        this.rain = Bodies.circle(x, y, 5, options); 
        World.add(world, this.rain);
    }
    display(){
        var pos = this.rain.position;
        push();
        ellipseMode(CENTER);
        fill("blue");
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();

    }

       updateY(){
        if(this.rain.position.y>height){
           Matter.Body.setPosition(this.rain,{x: random(0,400),y: random(0,400)})
        }

    }
}