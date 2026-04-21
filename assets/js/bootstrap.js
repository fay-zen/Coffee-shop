(function(){
  function injectShared(){
    const active = document.body?.dataset.active || '';
    const header = document.querySelector('[data-header]');
    const footer = document.querySelector('[data-footer]');
    if (header) header.outerHTML = siteHeader(active);
    if (footer) footer.outerHTML = siteFooter();
    document.dispatchEvent(new CustomEvent('nb:layout-ready'));
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectShared, { once:true });
  } else {
    injectShared();
  }
})();
