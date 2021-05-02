var Wallpaper,Wallpaperimage,TOMimage;


function preload() {
  Wallpaperimage = loadImage ("garden.png");
   
}

function setup(){
    createCanvas(800,800);
   
    Wallpaper = createSprite (400,200,50,20)
    Wallpaper.addImage("background",Wallpaperimage)
   
    

}

function draw() {
  
    background("0");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
