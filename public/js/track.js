  const inner = document.getElementById('tickerInner');
  const set = document.getElementById('tickerSet');


  const clone = set.cloneNode(true);
  clone.removeAttribute('id');
  inner.appendChild(clone);

  let x = 0;
  let targetSpeed = 4;
  let currentSpeed = 2;

  function tick() {
    currentSpeed += (targetSpeed - currentSpeed) * 0.05;
    x -= currentSpeed;

    const setW = set.offsetWidth;
    if (Math.abs(x) >= setW) x += setW;

    inner.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);

  const ticker = inner.parentElement;
  ticker.addEventListener('mouseenter', () => targetSpeed = 0.9);
  ticker.addEventListener('mouseleave', () => targetSpeed = 4);