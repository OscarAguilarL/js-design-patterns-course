const canvas = document.querySelector('canvas#canvas');

class Ball {
  /**
   * Constructor
   * @param {CanvasRenderingContext2D } ctx
   * @param {HTMLCanvasElement} canvas
   * @param {number} ballSize
   */
  constructor(ctx, canvas, ballSize) {
    this.ctx = ctx;
    this.width = canvas.width;
    this.height = canvas.height;
    this.ballSize = ballSize;
    this.positionX = 0;
    this.positionY = 0;

    this.state = new State1();
  }

  setState(state) {
    this.state = state;
  }

  print() {
    this.state.print(this);
  }
}

class State1 {
  /**
   * print()
   * @param {Ball} ball
   */
  print(ball) {
    ball.ctx.clearRect(0, 0, ball.width, ball.height);

    ball.ctx.fillRect(
      ball.positionX,
      ball.positionY,
      ball.ballSize,
      ball.ballSize
    );

    if (ball.positionX < ball.width - ball.ballSize) {
      ball.positionX += ball.ballSize;
    } else {
      ball.setState(new State2());
    }
  }
}

class State2 {
  /**
   * print()
   * @param {Ball} ball
   */
  print(ball) {
    ball.ctx.clearRect(0, 0, ball.width, ball.height);

    ball.ctx.fillRect(
      ball.positionX,
      ball.positionY,
      ball.ballSize,
      ball.ballSize
    );

    if (ball.positionY < ball.height - ball.ballSize) {
      ball.positionY += ball.ballSize;
    } else {
      ball.setState(new State3());
    }
  }
}

class State3 {
  /**
   * print()
   * @param {Ball} ball
   */
  print(ball) {
    ball.ctx.clearRect(0, 0, ball.width, ball.height);

    ball.ctx.fillRect(
      ball.positionX,
      ball.positionY,
      ball.ballSize,
      ball.ballSize
    );

    if (ball.positionX > 0) {
      ball.positionX -= ball.ballSize;
    } else {
      ball.setState(new State4());
    }
  }
}

class State4 {
  /**
   * print()
   * @param {Ball} ball
   */
  print(ball) {
    ball.ctx.clearRect(0, 0, ball.width, ball.height);

    ball.ctx.fillRect(
      ball.positionX,
      ball.positionY,
      ball.ballSize,
      ball.ballSize
    );

    if (ball.positionY > 0) {
      ball.positionY -= ball.ballSize;
    } else {
      ball.setState(new State1());
    }
  }
}

const ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';

const ball = new Ball(ctx, canvas, 10);
// ball.print();

setInterval(() => ball.print(), 100);
