/*function CreatingButtons()
  {
      if(gameState==="HomePage")
      {
        fill("pink");
      
      play = createSprite(200,200,100,100);
    fill("orange");
    HowToPlay = createSprite(300,300);
  
  }
  
  }
  
function DestroyOrNot()
{
    if(gameState!=="HomePage")
    {
        play.destroy();
        HowToPlay.destroy();
    }
    else{
        text("hilloo")
    }
}

function ButtonsPressed()
{
    if(mousePressedOver(play))
    {
      //gameState = "level1";
      text("hiloo",100,400)
      //play.visible = false;
      //rules.visible = false;
      decider = false
    }
  
    if(mousePressedOver(HowToPlay))
    {
      //var back = createSprite(100,100);
      decider = false;
      gameState = "HowToPlay"
      
    }
    
  
  

}*/

function DisplayingStones()
{

  if(gameState === "level1")
  {
    stone1.display();
    /*A1.display();
    A2.display();
    A3.display();*/
    
    stone2.display();

    stone3.display();

    stone4.display();

    stone5.display();

    stone6.display();

    stone7.display();

    stone8.display();

    stone9.display();

    stone10.display();

    stone11.display();

    stone12.display();

    stone13.display();

    stone14.display();

    player.display();
    //rectMode(CENTER)
    //rect(player.position.x,player.position.y,player.width,player.height);
  }

}