window.NBLayout = (() => {
  const icon = (name, cls = 'icon') => {
    const icons = {
      heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 20-1.4-1.3C5.4 13.9 2 10.8 2 7a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 3.8-3.4 6.9-8.6 11.7L12 20Z"></path></svg>`,
      user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"></circle><path d="M4 20a8 8 0 0 1 16 0"></path></svg>`,
      cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="20" r="1.5"></circle><circle cx="18" cy="20" r="1.5"></circle><path d="M3 4h2l2.4 10.2a1 1 0 0 0 1 .8h9.8a1 1 0 0 0 1-.8L21 7H7"></path></svg>`,
      menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>`,
      close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6 6 18"></path></svg>`,
      instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="4"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg>`,
      facebook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 8h-2a2 2 0 0 0-2 2v3H9v3h2v5h3v-5h2.2l.8-3H14v-2c0-.6.4-1 1-1h2V8Z"></path></svg>`,
      phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.6a2 2 0 0 1-.6 1.8l-1.9 1.9a16 16 0 0 0 6 6l1.9-1.9a2 2 0 0 1 1.8-.6l2.6.4a2 2 0 0 1 1.7 2Z"></path></svg>`,
      mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16v12H4z"></path><path d="m4 7 8 6 8-6"></path></svg>`,
      pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>`
    };
    return `<span class="${cls}">${icons[name] || ''}</span>`;
  };

  const siteHeader = (active = '') => `
<header class="site-header">
  <div class="container topbar">
    <a href="index.html" class="brand"><span class="brand-mark">N</span><span>Noir Bean</span></a>
    <nav class="main-nav" aria-label="Primary navigation">
      <div class="nav-mobile-head">
        <a href="index.html" class="brand small"><span class="brand-mark">N</span><span>Noir Bean</span></a>
        <button class="btn btn-icon mobile-close" data-nav-close aria-label="Close menu">${icon('close')}</button>
      </div>
      <a class="nav-link ${active === 'home' ? 'active' : ''}" href="index.html">Home</a>
      <a class="nav-link ${active === 'shop' ? 'active' : ''}" href="shop.html">Menu</a>
      <a class="nav-link ${active === 'tracking' ? 'active' : ''}" href="tracking.html">Track</a>
      <a class="nav-link ${active === 'history' ? 'active' : ''}" href="history.html">Orders</a>
      <a class="nav-link ${active === 'support' ? 'active' : ''}" href="support.html">Support</a>
      <a class="nav-link ${active === 'admin' ? 'active' : ''}" href="admin.html">Admin</a>
      <div class="nav-mobile-tools">
        <a class="nav-tool-link" href="favorites.html">${icon('heart')}<span>Favorites</span><span class="count-badge inline" data-fav-count>0</span></a>
        <a class="nav-tool-link" href="account.html">${icon('user')}<span>Account</span></a>
        <a class="nav-tool-link" href="cart.html">${icon('cart')}<span>Cart</span><span class="count-badge inline" data-cart-count>0</span></a>
      </div>
    </nav>
    <div class="nav-tools">
      <a class="btn btn-icon hide-mobile" href="favorites.html" aria-label="Favorites">${icon('heart')}<span class="count-badge" data-fav-count>0</span></a>
      <a class="btn btn-icon hide-mobile" href="account.html" aria-label="Account">${icon('user')}</a>
      <a class="btn btn-icon" href="cart.html" aria-label="Cart">${icon('cart')}<span class="count-badge" data-cart-count>0</span></a>
      <button class="btn btn-icon mobile-nav-toggle" data-nav-toggle aria-label="Open menu">${icon('menu')}</button>
    </div>
  </div>
  <div class="nav-overlay" data-nav-overlay></div>
</header>`;

  const siteFooter = () => `<footer class="footer">
  <div class="container footer-grid">
    <div class="footer-brand-block">
      <a href="index.html" class="brand footer-brand"><span class="brand-mark">N</span><span>Noir Bean</span></a>
      <p>Milktea, coffee, fries, and rice meals for daily delivery.</p>
      <div class="footer-socials">
        <a class="social-link" href="support.html" aria-label="Instagram">${icon('instagram')}</a>
        <a class="social-link" href="support.html" aria-label="Facebook">${icon('facebook')}</a>
      </div>
    </div>
    <div>
      <span class="footer-title">Menu</span>
      <div class="footer-links">
        <a href="shop.html?cat=milktea">Milktea</a>
        <a href="shop.html?cat=coffee">Coffee</a>
        <a href="shop.html?cat=fries">Fries</a>
        <a href="shop.html?cat=meals">Meals</a>
      </div>
    </div>
    <div>
      <span class="footer-title">Shop</span>
      <div class="footer-links">
        <a href="tracking.html">Track</a>
        <a href="history.html">Orders</a>
        <a href="favorites.html">Favorites</a>
        <a href="account.html">Account</a>
      </div>
    </div>
    <div>
      <span class="footer-title">Contact</span>
      <div class="footer-contact-list">
        <a href="support.html">${icon('phone','icon small')}<span>0917 000 0000</span></a>
        <a href="support.html">${icon('mail','icon small')}<span>hello@noirbean.demo</span></a>
        <a href="support.html">${icon('pin','icon small')}<span>Pasay City, Metro Manila</span></a>
      </div>
    </div>
  </div>
  <div class="container footer-bottom">
    <span>Noir Bean</span>
    <span>Open daily • 09:00–22:00</span>
  </div>
</footer>`;

  return { icon, siteHeader, siteFooter };
})();
