// Floating golden particles
(function () {
  const layer = document.getElementById('particles');
  if (layer) {
    const count = window.innerWidth < 700 ? 24 : 50;
    for (let i = 0; i < count; i++) {
      const s = document.createElement('span');
      s.style.left = Math.random() * 100 + 'vw';
      s.style.animationDuration = 6 + Math.random() * 10 + 's';
      s.style.animationDelay = -Math.random() * 12 + 's';
      const sc = 0.6 + Math.random() * 1.6;
      s.style.transform = `scale(${sc})`;
      s.style.opacity = (0.3 + Math.random() * 0.5).toString();
      layer.appendChild(s);
    }
  }

  // Mobile menu toggle
  const burger = document.getElementById('burger');
  const menu = document.querySelector('.nav__menu');
  if (burger && menu) {
    burger.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => menu.classList.remove('open'))
    );
  }

  // Subtle parallax on the central monolith
  const monolith = document.querySelector('.bg__monolith');
  if (monolith && window.matchMedia('(pointer:fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      monolith.style.transform = `translateX(calc(-50% + ${x}px)) translateY(${y}px)`;
    });
  }
})();
