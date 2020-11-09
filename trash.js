class trash {
    constructor(x, y, width, height) {
      var options = {
         'isStatic':true,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 100, 50, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(100,100,150);
      stroke("black")
      rect(0, 0, this.width, this.height);
    }
  };