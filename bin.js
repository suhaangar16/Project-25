class Bin{
    constructor(x,y,width,height){

        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/Dustbin.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);
    }
}