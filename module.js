class Module {
  constructor(pos){
    this.pos = pos
    this.vel = new p5.Vector(0,0)
    
    this.angle = random(radians(360))
    this.defaultSize = 10;
    this.size = this.defaultSize
    this.isMoving = false
    this.origin = this.pos.copy()
    this.randomVel = random()
  }
  
  update () {
    let mouse = new p5.Vector(mouseX, mouseY)
    let d = mouse.dist(this.pos);
    
    if(mouseIsPressed && d < 100){
      this.isMoving = true
      // target - standard = direction
      let dir = mouse.copy();
      dir.sub(this.pos);
      dir.mult(0.01);
      this.vel.add(dir); 
    } else {
      let dir = this.origin.copy();
      dir.sub(this.pos);
      dir.mult(0.01)
      
      this.vel.add(dir)
    }
    
    if(this.isMoving) {
      this.vel.mult(0.9);
      this.pos.add(this.vel);
    }
    
    d = Math.floor(d)
    // text(d, mouseX, mouseY)

    // map(input, min, max, new min, new max)
    this.size = map(d, 50,0, this.defaultSize,50)
    if(this.size < this.defaultSize){
       this.size = this.defaultSize
       }
  }
  
  display () {
    push()
      translate(this.pos.x, this.pos.y)
      rotate(this.angle)
      ellipse(0,0, this.size, this.size)
      rectMode(CENTER)
      rect(0,0,this.size, this.size)
    pop()
  }
}