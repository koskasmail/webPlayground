const ball = document.getElementById('ball');
const platform = document.getElementById('platform');

let isJumping = false;
let jumpHeight = 0;
let jumpInterval;

// Add click event listener to the ball
ball.addEventListener('click', () => {
  if (!isJumping) {
    isJumping = true;
    jumpInterval = setInterval(jump, 10);
  }
});

// Jump function
function jump() {
  jumpHeight += 2;
  if (jumpHeight >= 100) {
    clearInterval(jumpInterval);
    jumpInterval = setInterval(fall, 10);
  } else {
    ball.style.bottom = jumpHeight + 'px';
  }
}

// Fall function
function fall() {
  jumpHeight -= 2;
  if (jumpHeight <= 0) {
    clearInterval(jumpInterval);
    isJumping = false;
  } else {
    ball.style.bottom = jumpHeight + 'px';
  }

  // Check for collision with platform
  const ballRect = ball.getBoundingClientRect();
  const platformRect = platform.getBoundingClientRect();

  if (
    ballRect.bottom >= platformRect.top &&
    ballRect.left >= platformRect.left &&
    ballRect.right <= platformRect.right
  ) {
    clearInterval(jumpInterval);
    isJumping = false;
  }
}
