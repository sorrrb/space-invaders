const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

// Player Sprite
class Sprite {
  constructor(position) {
    this.position = position;
  }

  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.position.x, this.position.y, 50, 150);
  }
}

const player = new Sprite({
  x: 0,
  y: 0
})

player.draw();

const enemy = new Sprite({
  x: 400,
  y: 65
})

enemy.draw();

console.log(player);