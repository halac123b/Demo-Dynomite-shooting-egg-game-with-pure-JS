class game {
  constructor(){
    this.canvas = null;
    this.context = null;

    this.init();
    this.loop();
  }
  init(){
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.canvas.width = GAME_WIDTH;
    this.canvas.height = GAME_HEIGHT;
    document.body.appendChild(this.canvas);

    this.bullet = new bullet(this);
    this.arrow = new arrow(this);
    this.grid = new grid(this);
    this.listenMouseEvent();

  }
  getMousePos(event){
    let rect = this.canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    }
  }
  listenMouseEvent(){
    this.canvas.addEventListener("mousemove", (event) => {
      let mousePos = this.getMousePos(event);
      this.arrow.setMousePos(mousePos);
    });
    this.canvas.addEventListener("click", (event) => {
      let mousePos = this.getMousePos(event);
      this.bullet.fire(mousePos);
    });
  }

  loop(){
    this.update();
    this.draw();

    setTimeout(() => this.loop(), 20);
  }
  update(){
    this.bullet.update();
    this.grid.update();
  }
  draw(){
    this.context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    this.arrow.draw();
    this.bullet.draw();
    this.grid.draw();
  }
}

var g = new game();
