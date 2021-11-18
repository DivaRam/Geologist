class Rubber{
    constructor(x, y,r) {
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':1
        }
        this.body = Bodies.circle(x, y,r, options);
        this.r=r;
        World.add(world, this.body);
      }
      display(){
       var pos=this.body.position;
      
       var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke("pink");
        fill("purple");
        rectMode(CENTER);
        ellipse( 0, 0, this.r,this.r);
        pop();
      }
}