const nav = document.querySelector('.nav');
const showNav = document.querySelector('.show-nav-btn');
const hideNav = document.querySelector('.hide-nav-btn');
const navLinks = document.querySelectorAll('.nav-link');
const headerLinks = document.querySelectorAll('.header-link');
const headerTab = document.querySelector('.header-tab');
const date = document.querySelector('.date');
const pageNavs = document.querySelectorAll('.page-nav');

// Get Date
date.textContent = new Date().getFullYear();

// Show/Hide Navbar
showNav.addEventListener('click', () => {
  nav.classList.add('hidden');
});
hideNav.addEventListener('click', () => {
  nav.classList.remove('hidden');
});

// Show/Hide Header-tab
const hideHeadertab = () => {
  headerTab.style.transform = 'translateY(-100%)';
};
const showHeadertab = () => {
  headerTab.style.transform = 'translateY(0)';
};

// Smoothscrolling
headerLinks.forEach(head => {
  head.addEventListener('click', e => {
    e.preventDefault();
    const clicked = e.target.getAttribute('href');
    const scrollEl = document.querySelector(clicked);
    scrollEl.scrollIntoView({ behavior: 'smooth' });
    hideHeadertab();
  });
});

let scrollPosition = window.scrollY;
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > scrollPosition) {
    hideHeadertab();
  } else {
    showHeadertab();
  }
  scrollPosition = currentScroll;
});

navLinks.forEach(navLink => {
  navLink.addEventListener('click', e => {
    e.preventDefault();
    const clicked = e.target.getAttribute('href');
    const scrollEl = document.querySelector(clicked);
    scrollEl.scrollIntoView({ behavior: 'smooth' });
    nav.classList.remove('hidden');
  });
});

pageNavs.forEach(pageBtn => {
  pageBtn.addEventListener('click', e => {
    e.preventDefault();
    const clicked = e.target.getAttribute('href');
    const scrollEl = document.querySelector(clicked);
    scrollEl.scrollIntoView({ behavior: 'smooth' });
  });
});
