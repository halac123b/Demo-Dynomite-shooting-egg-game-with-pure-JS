class grid {
  constructor(game){
    this.game = game;
    this.y = - ROW_HEIGHT;
    this.balls = [];
  }

  numRows(){
    return this.balls.length;
  }

  haveToCreateNewRow(){
    return (this.y > (this.numRows() - 1) * ROW_HEIGHT);
  }

  createNewRow(){
    let row = this.balls.length;
    let rowBall = [];
    for (let col = 0; col < 10; col++){
      let newBall = new ball(this.game, row, col);
      rowBall.push(newBall);
    }
    this.balls.push(rowBall);
  }

  update(){
    this.y += 0.75;
    if (this.haveToCreateNewRow()){
      this.createNewRow();
    }
    this.balls.forEach( (row) =>{
      row.forEach( (ball) => { ball.update();
      });
    });
  }

  draw(){
    this.game.context.beginPath();
    this.game.context.strokeStyle = "#FF0000";
    this.game.context.lineWidth = 3;
    this.game.context.moveTo(0, this.y);
    this.game.context.lineTo(GAME_WIDTH, this.y);
    this.game.context.stroke();

    this.balls.forEach( (row) =>{
      row.forEach( (ball) => {ball.draw(); 
      });
    });
  }
}