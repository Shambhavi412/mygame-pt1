class Stone extends Block{

    constructor(x,y,width,height)
    {
        super(x ,y,width + 70 ,height);
        
        
    }

    display()
    {
        //super.display();

        var pos = this.body.position;

        //rectMode(CENTER);
    rect(pos.x ,pos.y - 50 ,this.width + 70 ,this.height + 300);
   
    }














}