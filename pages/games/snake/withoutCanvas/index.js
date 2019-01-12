var CANVAS_WIDTH = 500,
  CANVAS_HEIGHT = 500,
  SNAKE_WIDTH = 20,
  SNAKE_HEIGHT = 20;

var canvas = {
  canvasWrapper: null,
  create: function() {
    this.canvasWrapper = document.createElement("div");
    this.canvasWrapper.style.width = CANVAS_WIDTH + "px";
    this.canvasWrapper.style.height = CANVAS_HEIGHT + "px";
    this.canvasWrapper.style.border = "1px solid #ccc";
    this.canvasWrapper.style.position = "relative";
    document.body.appendChild(this.canvasWrapper);
  },
  addSnake: function(snakeDom) {
    this.canvasWrapper.appendChild(snakeDom);
  },
  addMouse: function(node) {
    this.canvasWrapper.appendChild(node);
  },
  addListner: function() {
    window.addEventListener("keydown", function(event) {
      var isArrowKey = event.key.match(/^Arrow*/g);
      if (isArrowKey && isArrowKey.length) {
        switch (event.key) {
          case "ArrowUp":
            if (snake.direction !== -2 && snake.direction !== 2) {
              snake.direction = -2;
              snake.update();
            }
            break;
          case "ArrowDown":
            if (snake.direction !== -2 && snake.direction !== 2) {
              snake.direction = 2;
              snake.update();
            }
            break;
          case "ArrowLeft":
            if (snake.direction !== -1 && snake.direction !== 1) {
              snake.direction = -1;
              snake.update();
            }
            break;
          case "ArrowRight":
            if (snake.direction !== -1 && snake.direction !== 1) {
              snake.direction = 1;
              snake.update();
            }
            break;
        }
      }
    });
  }
};

var snake = {
  startTime: Date.now(),
  snakeWarpper: document.createElement("div"),
  direction: 1,
  position: [{ x: 40, y: 0 }, { x: 20, y: 0 }, { x: 0, y: 0 }],
  addCell: function(x, y, head) {
    var snakeCell = document.createElement("div");
    snakeCell.style.position = "absolute";
    snakeCell.style.top = y + "px";
    snakeCell.style.left = x + "px";
    snakeCell.style.width = SNAKE_WIDTH + "px";
    snakeCell.style.height = SNAKE_HEIGHT + "px";
    snakeCell.style.backgroundColor = head ? "green" : "grey";
    this.snakeWarpper.appendChild(snakeCell);
  },
  create: function() {
    while (this.snakeWarpper.firstChild) {
      this.snakeWarpper.removeChild(this.snakeWarpper.firstChild);
    }
    for (var i = 0; i < this.position.length; i++) {
      this.addCell(this.position[i].x, this.position[i].y, !i);
    }
  },
  update: function(time, eat) {
    if (eat || Date.now() - this.startTime >= 1000 / 10) {
      this.startTime = Date.now();
      console.log(eat);
      if (!eat) {
        console.log("B");
        this.position.pop();
      }
      var newXPosition,
        newYPosition,
        snakeHeadOldPosition = this.position[0];
      switch (this.direction) {
        case 1:
          newXPosition = snakeHeadOldPosition.x + SNAKE_WIDTH;
          Array.prototype.unshift.call(this.position, {
            x: newXPosition >= CANVAS_WIDTH ? 0 : newXPosition,
            y: snakeHeadOldPosition.y
          });
          break;
        case -1:
          newXPosition = snakeHeadOldPosition.x - SNAKE_WIDTH;
          Array.prototype.unshift.call(this.position, {
            x: newXPosition < 0 ? CANVAS_WIDTH - SNAKE_WIDTH : newXPosition,
            y: snakeHeadOldPosition.y
          });
          break;
        case 2:
          newYPosition = snakeHeadOldPosition.y + SNAKE_HEIGHT;
          Array.prototype.unshift.call(this.position, {
            x: snakeHeadOldPosition.x,
            y: newYPosition >= CANVAS_HEIGHT ? 0 : newYPosition
          });
          break;
        case -2:
          newYPosition = snakeHeadOldPosition.y - SNAKE_HEIGHT;
          Array.prototype.unshift.call(this.position, {
            x: snakeHeadOldPosition.x,
            y: newYPosition < 0 ? CANVAS_HEIGHT - SNAKE_HEIGHT : newYPosition
          });
          break;
      }
      mouse.eat(this.position[0].x, this.position[0].y);
      this.create();
    }
    requestAnimationFrame(this.update.bind(snake));
  },
  eatMouse: function() {
    console.log("Eat");
    this.update(null, true);
  }
};

var mouse = {
  xPosition: 0,
  yPosition: 0,
  mouseWrapper: document.createElement("div"),
  randomPosition: function(axis) {
    var newPosition = Math.floor(Math.random() * (25 - 1)); // 0 - 24
    var overlapSnake = snake.position.some(function(position) {
      return (
        position[axis] ===
        newPosition * (axis === "x" ? SNAKE_WIDTH : SNAKE_HEIGHT)
      );
    });
    if (overlapSnake) {
      return this.randomPosition(axis);
    }
    if (axis === "x") {
      this.xPosition = newPosition * SNAKE_WIDTH;
      return this.xPosition;
    } else {
      this.yPosition = newPosition * SNAKE_HEIGHT;
      return this.yPosition;
    }
  },
  create: function() {
    this.mouseWrapper.style.width = SNAKE_WIDTH + "px";
    this.mouseWrapper.style.height = SNAKE_HEIGHT + "px";
    this.mouseWrapper.style.borderRadius = "50%";
    this.mouseWrapper.style.position = "absolute";
    this.mouseWrapper.style.backgroundColor = "brown";
    this.mouseWrapper.style.top = this.randomPosition("y") + "px";
    this.mouseWrapper.style.left = this.randomPosition("x") + "px";
  },
  update: function() {
    this.mouseWrapper.style.top = this.randomPosition("y") + "px";
    this.mouseWrapper.style.left = this.randomPosition("x") + "px";
  },
  eat: function(x, y) {
    if (x === this.xPosition && y === this.yPosition) {
      snake.eatMouse();
      this.update();
    }
  }
};

snake.create();
mouse.create();
canvas.create();
canvas.addSnake(snake.snakeWarpper);
canvas.addMouse(mouse.mouseWrapper);
canvas.addListner();
snake.update();
