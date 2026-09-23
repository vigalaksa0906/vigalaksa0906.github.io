const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
const sections = navLinks.map((link) => document.querySelector(link.hash));

function updateActiveNavigation() {
  const readingLine = window.scrollY + Math.min(window.innerHeight * 0.4, 280);
  let activeSection = null;

  for (const section of sections) {
    if (section && section.getBoundingClientRect().top + window.scrollY <= readingLine) {
      activeSection = section.id;
    }
  }

  for (const link of navLinks) {
    if (link.hash === `#${activeSection}`) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  }
}

window.addEventListener('scroll', updateActiveNavigation, { passive: true });
window.addEventListener('resize', updateActiveNavigation);
window.addEventListener('load', updateActiveNavigation);
updateActiveNavigation();
