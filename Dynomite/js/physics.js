class physics {
  distance(ball1, ball2){
    return Math.sqrt(Math.pow(ball1.x - ball2.x, 2) + Math.pow(ball1.y - ball2.y, 2));
  }

  collision(ball1, ball2){
    return this.distance(ball1, ball2) <= BALL_DIAMETER;
  }
}