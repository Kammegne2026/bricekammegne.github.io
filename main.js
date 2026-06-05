// Mobile nav toggle
const burger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('navMobile');
burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.remove('open'))
);

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id], aside[id]');
const navLinks = document.querySelectorAll('.topnav-links a, .topnav-mobile a');

function setActive() {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY + 80 >= s.offsetTop) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = '';
    const href = a.getAttribute('href');
    if (href === `#${current}` || (current === 'bio' && href === '#about')) {
      a.style.color = '#fff';
      a.style.fontWeight = '600';
    } else {
      a.style.fontWeight = '';
    }
  });
}
window.addEventListener('scroll', setActive, { passive: true });
setActive();
