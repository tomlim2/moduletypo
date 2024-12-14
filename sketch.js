let modules = [];

function setup() {
  createCanvas(400, 400);
  background(0); 
  textFont('Do Hyeon')
  fill('255')
  textSize(250)
  textAlign(CENTER, TOP)
  text('어쩔', width/2, -10)
  text('어쩔', width/2, 190)
  
  let gap = 10;
  
  for(let y = 0; y < width ; y +=gap) {
    for(let x = 0; x < width ; x +=gap) {
      let c = get(x,y)
      let b = brightness(c);
      
      if(b == 100){
        fill('forestgreen')
        ellipse(x, y, gap, gap)
        let ps = new p5.Vector(x,y)
        let module = new Module(ps)
        modules.push(module)
      }
    }
  }
  
}

function draw() {
  background("darkred")
  for(let i=0; i<modules.length; i ++){
    modules[i].update()
    modules[i].display()
  }
}