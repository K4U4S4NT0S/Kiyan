const nav = document.querySelector('#nav');
const cursor = document.querySelector('#cur');
const cursorRing = document.querySelector('#cur-r');
const revealItems = document.querySelectorAll('.reveal');
const statNumbers = document.querySelectorAll('.stat-number');
const bannerBg = document.querySelector('#bannerBg');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
  revealOnScroll();
  animateBanner();
  animateStats();
});

window.addEventListener('mousemove', (event) => {
  if (!cursor || !cursorRing) return;
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
  cursorRing.style.left = `${event.clientX}px`;
  cursorRing.style.top = `${event.clientY}px`;
});

function revealOnScroll() {
  const triggerPoint = window.innerHeight * 0.85;

  revealItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerPoint) {
      item.classList.add('active');
    }
  });
}

function animateStats() {
  statNumbers.forEach((number) => {
    if (number.dataset.animated === 'true') return;

    const numberTop = number.getBoundingClientRect().top;
    if (numberTop > window.innerHeight * 0.85) return;

    number.dataset.animated = 'true';
    const target = Number(number.dataset.target);
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 80));

    const counter = setInterval(() => {
      current += increment;

      if (current >= target) {
        current = target;
        clearInterval(counter);
      }

      number.textContent = current;
    }, 18);
  });
}

function animateBanner() {
  if (!bannerBg) return;
  const bannerTop = bannerBg.getBoundingClientRect().top;
  bannerBg.style.transform = `translateY(${bannerTop * -0.08}px)`;
}

const contactForm = document.querySelector('.contact-form');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Mensagem enviada com sucesso!');
  contactForm.reset();
});

revealOnScroll();
animateStats();
