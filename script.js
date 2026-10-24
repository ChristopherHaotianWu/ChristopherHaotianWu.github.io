document.getElementById('print-resume').addEventListener('click', () => window.print());

const sectionLinks = [...document.querySelectorAll('.site-header nav a')];
const sections = sectionLinks.map(link => document.querySelector(link.hash)).filter(Boolean);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (!visible.length) return;
    for (const link of sectionLinks) {
      if (link.hash === `#${visible[0].target.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }, { rootMargin: '-5% 0px -55% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
