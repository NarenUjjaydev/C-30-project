
class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :1.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png")
        this.visibility = 250
        World.add(world, this.body);
      }

      display(){
        if(this.body.speed < 3){
          this.pos=this.body.position;
         push();
         translate(this.pos.x,this.pos.y)
         rectMode(CENTER);
         //fill("blue")
         rect(0,0,30,40);
         pop();
     }
     else{
         World.remove(world,this.body);
         push();
         tint(255,this.visibility);
         this.visibility=this.visibility-5;
         pop();
     }
 }
}
        
      
