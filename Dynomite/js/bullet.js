class bullet {
  constructor(game) {
    this.game = game;
    this.image = null;
    
    this.createStartProperties();
  }

  createStartProperties(){
    this.imageLoaded = false;

    this.x = BULLET_START_X;
    this.y = BULLET_START_Y;

    this.speed = BALL_SPEED;
    this.speedX = 0;
    this.speedY = 0;
    this.isMoving = false;

    this.color = this.getRandomColor();
    this.loadImage();
  }

  getRandomColor(){
    let colors = ["blue", "green"];
    let rand = Math.round(Math.random());
    return colors[rand];
  }
  loadImage(){
    this.image = new Image();
    this.image.onload = () => {
      this.imageLoaded = true;
    };
    this.image.src = "img/egg_" + this.color + ".png"; 
  }
  fire(mousePos){
    if (this.isMoving)
      return;

    let deg = Math.atan2(mousePos.y - this.y, mousePos.x - this.x);
    this.speedX = this.speed * Math.cos(deg);
    this.speedY = this.speed * Math.sin(deg);
    this.isMoving = true;
  }
  update(){
    if (this.x - BALL_RADIUS <= 0 || this.x + BALL_RADIUS >= GAME_WIDTH){
      this.speedX = -this.speedX;
    }
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.y + BALL_RADIUS <= 0){
      this.createStartProperties();
    }
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