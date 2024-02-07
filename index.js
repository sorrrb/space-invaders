const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

// Player Sprite
class Sprite {
  constructor( { position, velocity } ) { // Passes a single argument, position AND/OR velocity property
    this.position = position;
    this.velocity = velocity;
  }

  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.position.x, this.position.y, 50, 150);
  }
}

const player = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  }
});

player.draw();

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
}

enemy.draw();

animate();