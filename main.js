// Tab switching for code examples
document.querySelectorAll('.example-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;

    document.querySelectorAll('.example-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.code-panel').forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    const panel = document.getElementById(target);
    if (panel) {
      panel.classList.add('active');
      // Update window title
      const title = document.querySelector('.window-title');
      if (title) title.textContent = tab.textContent.trim() + '.rs';
    }
  });
});

// Snowflake animation
function createSnowflakes() {
  const container = document.querySelector('.snowflakes');
  if (!container) return;

  const flakes = ['❄', '❅', '❆', '✦', '✧'];
  const count = 18;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'snowflake';
    el.textContent = flakes[Math.floor(Math.random() * flakes.length)];
    el.style.left = Math.random() * 100 + '%';
    el.style.fontSize = (0.6 + Math.random() * 0.8) + 'rem';
    el.style.animationDuration = (8 + Math.random() * 14) + 's';
    el.style.animationDelay = (-Math.random() * 20) + 's';
    container.appendChild(el);
  }
}

createSnowflakes();

// Smooth entrance animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .platform-card').forEach(el => {
  el.classList.add('animate-on-scroll');
  observer.observe(el);
});