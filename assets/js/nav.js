window.NBNav = (() => {
  const qs = (s, scope = document) => scope.querySelector(s);
  const qsa = (s, scope = document) => [...scope.querySelectorAll(s)];

  function syncActiveNav() {
    const active = document.body?.dataset.active || '';
    qsa('.main-nav .nav-link').forEach(link => {
      const href = link.getAttribute('href') || '';
      const page = href.split('.html')[0].replace(/^.*\//, '');
      const normalized = page === 'index' ? 'home' : page;
      link.classList.toggle('active', normalized === active);
    });
  }

  function closeNav() {
    document.body.classList.remove('nav-open');
  }

  function openNav() {
    document.body.classList.add('nav-open');
  }

  function bindEvents() {
    if (document.body.dataset.navBound === 'true') return;
    document.body.dataset.navBound = 'true';

    document.addEventListener('click', e => {
      if (e.target.closest('[data-nav-toggle]')) openNav();
      if (e.target.closest('[data-nav-close],[data-nav-overlay],.main-nav .nav-link')) closeNav();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeNav();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1100) closeNav();
    });
  }

  function init() {
    syncActiveNav();
    bindEvents();
  }

  document.addEventListener('nb:layout-ready', init);
  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init, { once: true });

  return { init, syncActiveNav, openNav, closeNav };
})();
