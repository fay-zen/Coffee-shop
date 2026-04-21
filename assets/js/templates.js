function siteHeader(active=''){return `
<header class="site-header">
  <div class="container topbar">
    <a href="index.html" class="brand"><span class="brand-mark">N</span><span>Noir Bean</span></a>
    <nav class="main-nav" aria-label="Primary navigation">
      <div class="nav-mobile-head">
        <a href="index.html" class="brand small"><span class="brand-mark">N</span><span>Noir Bean</span></a>
        <button class="btn btn-icon mobile-close" data-nav-close aria-label="Close menu">${NB.icon('close')}</button>
      </div>
      <a class="nav-link ${active==='home'?'active':''}" href="index.html">Home</a>
      <a class="nav-link ${active==='shop'?'active':''}" href="shop.html">Menu</a>
      <a class="nav-link ${active==='tracking'?'active':''}" href="tracking.html">Track</a>
      <a class="nav-link ${active==='history'?'active':''}" href="history.html">Orders</a>
      <a class="nav-link ${active==='support'?'active':''}" href="support.html">Support</a>
      <a class="nav-link ${active==='admin'?'active':''}" href="admin.html">Admin</a>
      <div class="nav-mobile-tools">
        <a class="nav-tool-link" href="favorites.html">${NB.icon('heart')}<span>Favorites</span><span class="count-badge inline" data-fav-count>0</span></a>
        <a class="nav-tool-link" href="account.html">${NB.icon('user')}<span>Account</span></a>
        <a class="nav-tool-link" href="cart.html">${NB.icon('cart')}<span>Cart</span><span class="count-badge inline" data-cart-count>0</span></a>
      </div>
    </nav>
    <div class="nav-tools">
      <a class="btn btn-icon hide-mobile" href="favorites.html" aria-label="Favorites">${NB.icon('heart')}<span class="count-badge" data-fav-count>0</span></a>
      <a class="btn btn-icon hide-mobile" href="account.html" aria-label="Account">${NB.icon('user')}</a>
      <a class="btn btn-icon" href="cart.html" aria-label="Cart">${NB.icon('cart')}<span class="count-badge" data-cart-count>0</span></a>
      <button class="btn btn-icon mobile-nav-toggle" data-nav-toggle aria-label="Open menu">${NB.icon('menu')}</button>
    </div>
  </div>
  <div class="nav-overlay" data-nav-overlay></div>
</header>`}

function siteFooter(){return `<footer class="footer">
  <div class="container footer-grid">
    <div class="footer-brand-block">
      <a href="index.html" class="brand footer-brand"><span class="brand-mark">N</span><span>Noir Bean</span></a>
      <p>Milktea, coffee, fries, and rice meals for daily delivery.</p>
      <div class="footer-socials">
        <a class="social-link" href="support.html" aria-label="Instagram">${NB.icon('instagram')}</a>
        <a class="social-link" href="support.html" aria-label="Facebook">${NB.icon('facebook')}</a>
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
        <a href="support.html">${NB.icon('phone','icon small')}<span>0917 000 0000</span></a>
        <a href="support.html">${NB.icon('mail','icon small')}<span>hello@noirbean.demo</span></a>
        <a href="support.html">${NB.icon('pin','icon small')}<span>Pasay City, Metro Manila</span></a>
      </div>
    </div>
  </div>
  <div class="container footer-bottom">
    <span>Noir Bean</span>
    <span>Open daily • 09:00–22:00</span>
  </div>
</footer>`}
