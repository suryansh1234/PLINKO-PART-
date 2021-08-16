class Particle{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.4,
            density:1.2,
            friction:0.5,
        }
        this.body=Bodies.circle(x,y,radius,options);
   // console.log(this.body.radius)
        this.radius=radius;
        this.colour=color(random(0,255),random(0,255),random(0,255))

        //this.image = loadImage("drop.png");
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        fill(this.colour);
        ellipseMode(CENTER);
        //imageMode(CENTER)
        ellipse(pos.x,pos.y,this.radius*2,this.radius*2);
        //image(this.image,this.body.position.x,this.body.position.y,this.radius*2,this.radius*2)
        
       
        
        
      }
      //
    }