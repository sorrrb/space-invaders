const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const GRAVITY = 0.2; // Global gravity constant for affecting sprite position on the y-axis

// Player Sprite
class Sprite {
  constructor( { position, velocity } ) { // Passes a single argument, position AND/OR velocity property
    this.position = position;
    this.velocity = velocity;
    this.height = 150;
  }

  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.position.x, this.position.y, 50, this.height);
  }

  update() {
    this.draw();
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0;
    } else this.velocity.y += GRAVITY;
  }
}

const player = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  velocity: {
    x: 0,
    y: 10
  }
});

const enemy = new Sprite({
  position: {
    x: 400,
    y: 140
  },
  velocity: {
    x: 0,
    y: 0
  }
});

function animate() { // Infinite animation loop
  window.requestAnimationFrame(animate);
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  enemy.update();
}

animate();