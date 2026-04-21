(function(){
  function injectShared(){
    const active = document.body?.dataset.active || '';
    const header = document.querySelector('[data-header]');
    const footer = document.querySelector('[data-footer]');
    if (header && window.NBLayout) header.outerHTML = window.NBLayout.siteHeader(active);
    if (footer && window.NBLayout) footer.outerHTML = window.NBLayout.siteFooter();
    document.dispatchEvent(new CustomEvent('nb:layout-ready'));
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectShared, { once:true });
  } else {
    injectShared();
  }
})();
