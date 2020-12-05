class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.09,
          'friction':10,
          'isStatic': false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
       this.color=color(random(0, 255),random(0, 255),random(0, 255))
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(this.color);
      strokeWeight(4)
      stroke(this.color)
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  