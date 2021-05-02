class ground{
    constructor(){
        var options = {isStatic: true}
        this.body=Bodies.rectangle(200, 390, 400, 10, options);
        World.add(world, this.body)
        this.width = 400;
        this.height = 10;
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        fill("blue")
        rect(pos.x, pos.y, this.width, this.height);
    }
}