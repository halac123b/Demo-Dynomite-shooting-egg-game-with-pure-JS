class ball {
  constructor(game, row, col){
    this.game = game;
    this.row = row;
    this.col = col;

    this.x = 0;
    this.y = 0;
    this.image = null;
    this.imageLoaded = false;

    this.color = this.getRandomColor();
    this.loadImage();
    this.calculatePos();
  }
  getRandomColor(){
    let colors = ["blue", "green"];
    let rand = Math.round(Math.random());
    return colors[rand];
  }

  calculatePos(){
    this.x = BALL_RADIUS +  BALL_DIAMETER * this.col;
    this.y = this.game.grid.y - ROW_HEIGHT * this.row;
  }

  update(){
    this.calculatePos();
  }
  loadImage(){
    this.image = new Image();
    this.image.onload = () => {
      this.imageLoaded = true;
    };
    this.image.src = "img/egg_" + this.color + ".png"; 
  }
  draw(){
    if (!this.imageLoaded)
      return;
  
    this.game.context.drawImage(
      this.image,
      this.x - BALL_RADIUS, this.y - BALL_RADIUS
    );
  }
}