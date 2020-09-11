class Paper {
    constructor(x, y, radius) {
        var options = {
            isStatic: true
        };
        this.body = Matter.Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
    };
    display() {
        var pos = this.body.position;
        fill("brown");
        circle(50, 650, 20);
    }
}