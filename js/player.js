class Player {
constructor()
{

    //super(x,y,width,height);
       
    this.body = Bodies.rectangle(270,100,40,40,{isStatic : false,restitution : 0});
    World.add(world,this.body);
  
   /* this.x = 250;
    this.y = 300;
    this.width = 70;
    this.height = 70;*/
 //  this.body.setVelocity(this.body,{x : 10, y : 10})


}

display()
{
    var position = this.body.position;
    push();
    translate(position.x,position.y);
    rotate(this.body.angle);
    fill(255)
    //rectMode(CENTER);
    //rect(0,0,this.width,this.height);

    //Mode(RADIUS);
rect(0,0,40,40);
   // image(this.image2,0,0,this.width+ 20,this.height + 20);
    //image()
    pop();
}


















}