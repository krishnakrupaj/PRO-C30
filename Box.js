class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1,
        'density':0.7
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visiblity = 255
    World.add(world, this.body);
  }
  display(){
    var speed = this.body.speed
      if(speed<3){
        var pos =this.body.position;
          rectMode(CENTER);
          rect(pos.x, pos.y, this.width, this.height);
      }else{             
        push()
        World.remove(world,this.body); 
        this.visiblity=this.visiblity-5;
        tint(255,this.visiblity);
        pop()  
      }
  }
  score(){if(this.visiblity<0 && this.visiblity>-105) {score++}}
  
};
