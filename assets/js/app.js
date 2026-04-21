const NB = (() => {
  const STORAGE = {
    products: 'nb_products_v2',
    orders: 'nb_orders_v2',
    cart: 'nb_cart_v2',
    favorites: 'nb_favorites_v2',
    profile: 'nb_profile_v2',
    riders: 'nb_riders_v2',
    notifications: 'nb_notifications_v2'
  };

  const icon = (name, cls = 'icon') => {
    const icons = {
      search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>`,
      cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="20" r="1.5"></circle><circle cx="18" cy="20" r="1.5"></circle><path d="M3 4h2l2.4 10.2a1 1 0 0 0 1 .8h9.8a1 1 0 0 0 1-.8L21 7H7"></path></svg>`,
      heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 20-1.4-1.3C5.4 13.9 2 10.8 2 7a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 3.8-3.4 6.9-8.6 11.7L12 20Z"></path></svg>`,
      user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"></circle><path d="M4 20a8 8 0 0 1 16 0"></path></svg>`,
      menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>`,
      close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6 6 18"></path></svg>`,
      plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 5v14M5 12h14"></path></svg>`,
      minus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14"></path></svg>`,
      arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path></svg>`,
      clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>`,
      truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 17h4"></path><path d="M3 6h11v8H3z"></path><path d="M14 9h3l4 4v1h-7z"></path><circle cx="7" cy="18" r="2"></circle><circle cx="17" cy="18" r="2"></circle></svg>`,
      box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3 4 7l8 4 8-4-8-4Z"></path><path d="M4 7v10l8 4 8-4V7"></path><path d="M12 11v10"></path></svg>`,
      bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 17H5.5a1 1 0 0 1-.8-1.6L6 13.7V10a6 6 0 1 1 12 0v3.7l1.3 1.7a1 1 0 0 1-.8 1.6H15"></path><path d="M10 21a2 2 0 0 0 4 0"></path></svg>`,
      chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V10"></path><path d="M10 20V4"></path><path d="M16 20v-6"></path><path d="M22 20v-9"></path></svg>`,
      filter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16"></path><path d="M7 12h10"></path><path d="M10 18h4"></path></svg>`,
      map: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 18 3 20V6l6-2 6 2 6-2v14l-6 2-6-2Z"></path><path d="M9 4v14"></path><path d="M15 6v14"></path></svg>`,
      edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"></path></svg>`,
      star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.2 6.5 20.2l1-6.2L3 9.6l6.2-.9L12 3Z"></path></svg>`,
      instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="4"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg>`,
      facebook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 8h-2a2 2 0 0 0-2 2v3H9v3h2v5h3v-5h2.2l.8-3H14v-2c0-.6.4-1 1-1h2V8Z"></path></svg>`,
      phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.6a2 2 0 0 1-.6 1.8l-1.9 1.9a16 16 0 0 0 6 6l1.9-1.9a2 2 0 0 1 1.8-.6l2.6.4a2 2 0 0 1 1.7 2Z"></path></svg>`,
      mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16v12H4z"></path><path d="m4 7 8 6 8-6"></path></svg>`,
      pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>`
    };
    return `<span class="${cls}">${icons[name] || ''}</span>`;
  };

  const imageSeed = {
    milktea: [
      'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=80'
    ],
    fries: [
      'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1619881589316-56c1210f3c16?auto=format&fit=crop&w=900&q=80'
    ],
    meals: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=80'
    ],
    coffee: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=900&q=80'
    ]
  };

  const baseProducts = [
    ['Classic Pearl','milktea',129],['Brown Sugar Creme','milktea',149],['Wintermelon Silk','milktea',135],['Matcha Cream','milktea',155],['Okinawa Velvet','milktea',139],['Taro Blend','milktea',145],['Hazelnut Milk','milktea',149],['Salted Caramel Tea','milktea',155],['Mango Popping','milktea',159],['Dark Cocoa Tea','milktea',149],
    ['Classic Fries','fries',89],['Cheese Fries','fries',109],['Truffle Fries','fries',129],['BBQ Fries','fries',115],['Sour Cream Fries','fries',115],['Chili Fries','fries',119],['Garlic Parmesan Fries','fries',125],['Loaded Fries','fries',145],['Seaweed Fries','fries',119],['Spicy Ranch Fries','fries',125],
    ['Chicken Rice','meals',169],['Sisig Rice','meals',185],['Tapa Rice','meals',189],['Katsu Rice','meals',199],['Teriyaki Bowl','meals',189],['Pepper Beef Bowl','meals',209],['Garlic Chicken Bowl','meals',189],['Spicy Tuna Rice','meals',175],['Fried Chicken Meal','meals',199],['Burger Steak Rice','meals',179],
    ['Americano','coffee',109],['Cafe Latte','coffee',129],['Spanish Latte','coffee',145],['Mocha','coffee',139],['Flat White','coffee',135],['Caramel Macchiato','coffee',149],['Sea Salt Latte','coffee',149],['Cold Brew','coffee',139],['Vanilla Latte','coffee',145],['Dirty Matcha','coffee',155]
  ];

  const descMap = {
    milktea: 'Cold blend. Pearl ready.',
    fries: 'Crisp cut. Hot serve.',
    meals: 'Rice bowl. Fast prep.',
    coffee: 'Fresh pull. Bold cup.'
  };

  const qs = (s, scope = document) => scope.querySelector(s);
  const qsa = (s, scope = document) => [...scope.querySelectorAll(s)];
  const money = n => `₱${Number(n).toLocaleString('en-PH', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  const today = () => new Date().toISOString().slice(0, 10);
  const uid = (prefix='NB') => `${prefix}${Date.now().toString().slice(-6)}${Math.floor(Math.random()*90+10)}`;
  const get = (k, d) => JSON.parse(localStorage.getItem(k) || JSON.stringify(d));
  const set = (k, v) => localStorage.setItem(k, JSON.stringify(v));

  function seed() {
    if (!localStorage.getItem(STORAGE.products)) {
      const products = baseProducts.map((p, i) => ({
        id: `P${(i+1).toString().padStart(3,'0')}`,
        name: p[0],
        category: p[1],
        price: p[2],
        stock: 10 + (i * 3) % 41,
        desc: descMap[p[1]],
        image: imageSeed[p[1]][i % imageSeed[p[1]].length],
        badge: i < 4 ? 'Top' : i % 9 === 0 ? 'New' : '',
        rating: (4.3 + ((i % 5) * 0.1)).toFixed(1)
      }));
      set(STORAGE.products, products);
    }
    if (!localStorage.getItem(STORAGE.riders)) {
      set(STORAGE.riders, [
        {id:'R001', name:'Noah Cruz', status:'Available', zone:'North', lat:14.603, lng:121.049, orders:2},
        {id:'R002', name:'Mia Lopez', status:'Available', zone:'East', lat:14.606, lng:121.055, orders:1},
        {id:'R003', name:'Ethan Reyes', status:'Busy', zone:'South', lat:14.598, lng:121.044, orders:5},
        {id:'R004', name:'Leah Santos', status:'Available', zone:'West', lat:14.609, lng:121.04, orders:3},
        {id:'R005', name:'Kai Flores', status:'Offline', zone:'Central', lat:14.601, lng:121.051, orders:0}
      ]);
    }
    if (!localStorage.getItem(STORAGE.profile)) {
      set(STORAGE.profile, { name: 'Mark Minero', phone: '0917 000 0000', address: 'Diliman, Quezon City' });
    }
    if (!localStorage.getItem(STORAGE.cart)) set(STORAGE.cart, []);
    if (!localStorage.getItem(STORAGE.favorites)) set(STORAGE.favorites, []);
    if (!localStorage.getItem(STORAGE.notifications)) set(STORAGE.notifications, [
      {id:uid('N'), text:'New Order', time:'Now'},
      {id:uid('N'), text:'Low Stock', time:'9m'},
      {id:uid('N'), text:'Rider Busy', time:'16m'}
    ]);
    if (!localStorage.getItem(STORAGE.orders)) {
      const sample = [
        createOrder({seedOnly:true, name:'A. Cruz', phone:'09170000001', address:'QC', payment:'Cash', items:[{productId:'P001', qty:2},{productId:'P021', qty:1}], status:'Preparing'}),
        createOrder({seedOnly:true, name:'J. Santos', phone:'09170000002', address:'QC', payment:'GCash', items:[{productId:'P034', qty:2},{productId:'P012', qty:1}], status:'On Delivery'}),
        createOrder({seedOnly:true, name:'R. Dela Paz', phone:'09170000003', address:'QC', payment:'Cash', items:[{productId:'P028', qty:1}], status:'Delivered'})
      ];
      set(STORAGE.orders, sample);
    }
  }

  function getProducts() { return get(STORAGE.products, []); }
  function getOrders() { return get(STORAGE.orders, []); }
  function getCart() { return get(STORAGE.cart, []); }
  function getFavorites() { return get(STORAGE.favorites, []); }
  function getRiders() { return get(STORAGE.riders, []); }
  function getProfile() { return get(STORAGE.profile, {}); }

  function updateCartBadge() {
    qsa('[data-cart-count]').forEach(el => el.textContent = getCart().reduce((a, b) => a + b.qty, 0));
  }

  function addToast(text) {
    const root = qs('#toast-root') || (() => {
      const div = document.createElement('div');
      div.id = 'toast-root';
      div.className = 'toast-root';
      document.body.appendChild(div);
      return div;
    })();
    const item = document.createElement('div');
    item.className = 'toast';
    item.textContent = text;
    root.appendChild(item);
    setTimeout(() => item.classList.add('show'), 10);
    setTimeout(() => { item.classList.remove('show'); setTimeout(() => item.remove(), 250); }, 2200);
  }

  function addToFavorites(id) {
    const fav = getFavorites();
    if (!fav.includes(id)) {
      fav.push(id);
      set(STORAGE.favorites, fav);
      addToast('Saved');
      renderFavoritesCount();
    }
  }
  function removeFavorite(id) {
    set(STORAGE.favorites, getFavorites().filter(x => x !== id));
    renderFavoritesCount();
  }
  function renderFavoritesCount() {
    qsa('[data-fav-count]').forEach(el => el.textContent = getFavorites().length);
  }

  function addToCart(productId, qty = 1, opts = {}) {
    const cart = getCart();
    const key = `${productId}-${opts.size || 'M'}-${opts.addons || ''}`;
    const existing = cart.find(i => i.key === key);
    if (existing) existing.qty += qty;
    else cart.push({ key, productId, qty, size: opts.size || 'M', addons: opts.addons || '' });
    set(STORAGE.cart, cart);
    updateCartBadge();
    addToast('Added');
  }

  function setCartQty(key, qty) {
    let cart = getCart();
    cart = cart.map(i => i.key === key ? { ...i, qty: Math.max(1, qty) } : i);
    set(STORAGE.cart, cart);
  }
  function removeCartItem(key) {
    set(STORAGE.cart, getCart().filter(i => i.key !== key));
  }

  function hydrateCart() {
    const products = getProducts();
    return getCart().map(item => {
      const p = products.find(x => x.id === item.productId) || {};
      const addonPrice = item.addons ? 20 : 0;
      const sizePrice = item.size === 'L' ? 20 : item.size === 'S' ? -10 : 0;
      const unit = (p.price || 0) + addonPrice + sizePrice;
      return { ...item, product: p, unit, total: unit * item.qty };
    });
  }

  function chooseRider() {
    const riders = getRiders();
    const available = riders.filter(r => r.status === 'Available').sort((a, b) => a.orders - b.orders);
    const chosen = available[0] || riders.filter(r => r.status !== 'Offline').sort((a, b) => a.orders - b.orders)[0] || riders[0];
    chosen.status = 'Busy';
    chosen.orders += 1;
    set(STORAGE.riders, riders);
    return chosen;
  }

  function pushNotif(text) {
    const items = get(STORAGE.notifications, []);
    items.unshift({ id: uid('N'), text, time: 'Now' });
    set(STORAGE.notifications, items.slice(0, 12));
  }

  function createOrder({ seedOnly = false, name, phone, address, payment, items, status = 'Queued' }) {
    const products = getProducts();
    const enriched = items.map(i => {
      const p = products.find(x => x.id === i.productId) || { price: 0, name: 'Item' };
      return {
        ...i,
        name: p.name,
        price: p.price,
        total: p.price * i.qty
      };
    });
    const subtotal = enriched.reduce((a, b) => a + b.total, 0);
    const delivery = 49;
    const rider = chooseRider();
    const number = uid('ORD');
    const stages = ['Queued', 'Preparing', 'On Delivery', 'Delivered'];
    const stageIndex = stages.indexOf(status);
    const order = {
      id: number,
      customer: { name, phone, address },
      payment,
      items: enriched,
      subtotal,
      delivery,
      total: subtotal + delivery,
      status,
      rider: rider ? { id: rider.id, name: rider.name, zone: rider.zone } : null,
      createdAt: new Date().toISOString(),
      eta: status === 'Delivered' ? 'Done' : '25 min',
      history: stages.slice(0, stageIndex + 1).map(s => ({ label: s, at: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) })),
      mapStep: status === 'On Delivery' ? 66 : status === 'Delivered' ? 100 : 28
    };
    if (!seedOnly) {
      const orders = getOrders();
      orders.unshift(order);
      set(STORAGE.orders, orders);
      set(STORAGE.cart, []);
      pushNotif('New Order');
      pushNotif('Rider Assigned');
    }
    return order;
  }

  function updateOrderStatus(id, nextStatus) {
    const orders = getOrders();
    const order = orders.find(o => o.id === id);
    if (!order) return;
    order.status = nextStatus;
    order.history.push({ label: nextStatus, at: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
    order.mapStep = nextStatus === 'Preparing' ? 25 : nextStatus === 'On Delivery' ? 70 : 100;
    order.eta = nextStatus === 'Delivered' ? 'Done' : nextStatus === 'On Delivery' ? '12 min' : '25 min';
    if (nextStatus === 'Delivered') pushNotif('Delivered');
    set(STORAGE.orders, orders);
  }

  function incomeRange() {
    const orders = getOrders().filter(o => o.status === 'Delivered' || o.status === 'On Delivery' || o.status === 'Preparing' || o.status === 'Queued');
    const now = new Date();
    const d = now.toISOString().slice(0,10);
    const month = now.toISOString().slice(0,7);
    const year = now.getFullYear().toString();
    return {
      day: orders.filter(o => o.createdAt.startsWith(d)).reduce((a,b) => a + b.total, 0),
      month: orders.filter(o => o.createdAt.startsWith(month)).reduce((a,b) => a + b.total, 0),
      year: orders.filter(o => o.createdAt.startsWith(year)).reduce((a,b) => a + b.total, 0)
    };
  }

  function productCard(p) {
    const isFav = getFavorites().includes(p.id);
    return `
      <article class="product-card">
        <a class="product-media" href="product.html?id=${p.id}"><img src="${p.image}" alt="${p.name}"></a>
        <div class="product-body">
          <div class="product-top">
            <span class="pill">${p.category}</span>
            ${p.badge ? `<span class="pill dark">${p.badge}</span>` : ''}
          </div>
          <a class="product-name" href="product.html?id=${p.id}">${p.name}</a>
          <p class="product-desc">${p.desc}</p>
          <div class="product-meta">
            <strong>${money(p.price)}</strong>
            <span class="tiny-inline">${icon('star','icon small')}${p.rating}</span>
          </div>
          <div class="product-actions">
            <button class="btn btn-icon ${isFav ? 'active' : ''}" data-fav="${p.id}">${icon('heart')}</button>
            <button class="btn btn-dark" data-add="${p.id}">Add</button>
          </div>
        </div>
      </article>`;
  }

  function mountShared() {
    seed();
    updateCartBadge();
    renderFavoritesCount();
    const openNav = () => document.body.classList.add('nav-open');
    const closeNav = () => document.body.classList.remove('nav-open');
    qs('[data-nav-toggle]')?.addEventListener('click', openNav);
    qs('[data-nav-close]')?.addEventListener('click', closeNav);
    qs('[data-nav-overlay]')?.addEventListener('click', closeNav);
    qsa('.main-nav .nav-link').forEach(link => link.addEventListener('click', closeNav));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });
    document.addEventListener('click', e => {
      const addBtn = e.target.closest('[data-add]');
      const favBtn = e.target.closest('[data-fav]');
      if (addBtn) addToCart(addBtn.dataset.add, 1);
      if (favBtn) {
        const id = favBtn.dataset.fav;
        if (getFavorites().includes(id)) removeFavorite(id); else addToFavorites(id);
        favBtn.classList.toggle('active');
      }
    });
  }

  function initHome() {
    const products = getProducts();
    qs('#best-grid').innerHTML = products.slice(0, 8).map(productCard).join('');
    qs('#bundle-grid').innerHTML = [
      {title:'Tea + Fries', price:'₱239', img:products[1].image},
      {title:'Meal + Latte', price:'₱309', img:products[33].image},
      {title:'Crew Set', price:'₱559', img:products[25].image}
    ].map(b => `<article class="bundle-card"><img src="${b.img}" alt="${b.title}"><div><p>${b.title}</p><strong>${b.price}</strong></div></article>`).join('');
  }

  function initShop() {
    const products = getProducts();
    const grid = qs('#shop-grid');
    const search = qs('#shop-search');
    const sort = qs('#shop-sort');
    const qp = new URLSearchParams(location.search).get('cat');
    let current = qp || 'all';
    function render() {
      let items = [...products];
      const term = search.value.trim().toLowerCase();
      if (current !== 'all') items = items.filter(p => p.category === current);
      if (term) items = items.filter(p => `${p.name} ${p.category}`.toLowerCase().includes(term));
      if (sort.value === 'price-asc') items.sort((a,b) => a.price - b.price);
      if (sort.value === 'price-desc') items.sort((a,b) => b.price - a.price);
      if (sort.value === 'top') items.sort((a,b) => b.rating - a.rating);
      qs('#shop-count').textContent = `${items.length}`;
      grid.innerHTML = items.length ? items.map(productCard).join('') : `<div class="empty-state"><h3>No Match</h3></div>`;
    }
    qsa('[data-filter]').forEach(btn => {
      if (btn.dataset.filter === current) btn.classList.add('active');
      btn.addEventListener('click', () => {
        qsa('[data-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        current = btn.dataset.filter;
        render();
      });
    });
    if (![...qsa('[data-filter]')].some(b => b.classList.contains('active'))) {
      qs('[data-filter="all"]')?.classList.add('active');
      current = 'all';
    }
    search?.addEventListener('input', render);
    sort?.addEventListener('change', render);
    render();
  }

  function initProduct() {
    const id = new URLSearchParams(location.search).get('id') || 'P001';
    const p = getProducts().find(x => x.id === id) || getProducts()[0];
    qs('#product-shell').innerHTML = `
      <div class="product-page-grid">
        <div class="product-page-media"><img src="${p.image}" alt="${p.name}"></div>
        <div class="product-page-info">
          <div class="breadcrumb">Menu / ${p.category} / ${p.name}</div>
          <h1>${p.name}</h1>
          <div class="price-line"><strong>${money(p.price)}</strong><span class="tiny-inline">${icon('star','icon small')}${p.rating}</span></div>
          <p class="muted">${p.desc}</p>
          <div class="option-group">
            <label>Size</label>
            <div class="chip-row">
              <button class="chip active" data-size="S">S</button>
              <button class="chip" data-size="M">M</button>
              <button class="chip" data-size="L">L</button>
            </div>
          </div>
          <div class="option-group">
            <label>Add-on</label>
            <div class="chip-row">
              <button class="chip active" data-addon="None">None</button>
              <button class="chip" data-addon="Pearl">Pearl</button>
              <button class="chip" data-addon="Cheese">Cheese</button>
            </div>
          </div>
          <div class="qty-row">
            <button class="btn btn-icon" id="qty-minus">${icon('minus')}</button>
            <strong id="qty-value">1</strong>
            <button class="btn btn-icon" id="qty-plus">${icon('plus')}</button>
          </div>
          <div class="page-actions">
            <button class="btn" id="fav-btn">${icon('heart')}Save</button>
            <button class="btn btn-dark" id="add-btn">Add to Cart</button>
          </div>
        </div>
      </div>`;
    let qty = 1; let size = 'S'; let addon = 'None';
    qs('#qty-minus').onclick = () => { qty = Math.max(1, qty - 1); qs('#qty-value').textContent = qty; };
    qs('#qty-plus').onclick = () => { qty += 1; qs('#qty-value').textContent = qty; };
    qsa('[data-size]').forEach(b => b.onclick = () => { qsa('[data-size]').forEach(x => x.classList.remove('active')); b.classList.add('active'); size = b.dataset.size; });
    qsa('[data-addon]').forEach(b => b.onclick = () => { qsa('[data-addon]').forEach(x => x.classList.remove('active')); b.classList.add('active'); addon = b.dataset.addon; });
    qs('#add-btn').onclick = () => addToCart(p.id, qty, { size, addons: addon === 'None' ? '' : addon });
    qs('#fav-btn').onclick = () => addToFavorites(p.id);
  }

  function initCart() {
    const shell = qs('#cart-shell');
    function render() {
      const items = hydrateCart();
      const subtotal = items.reduce((a,b) => a + b.total, 0);
      const delivery = items.length ? 49 : 0;
      const total = subtotal + delivery;
      shell.innerHTML = items.length ? `
        <div class="cart-grid">
          <section class="panel">
            ${items.map(i => `
              <div class="cart-row">
                <img src="${i.product.image}" alt="${i.product.name}">
                <div>
                  <h3>${i.product.name}</h3>
                  <p>${i.size}${i.addons ? ' / ' + i.addons : ''}</p>
                  <strong>${money(i.total)}</strong>
                </div>
                <div class="qty-tools">
                  <button class="btn btn-icon" data-less="${i.key}">${icon('minus')}</button>
                  <span>${i.qty}</span>
                  <button class="btn btn-icon" data-more="${i.key}">${icon('plus')}</button>
                  <button class="text-btn" data-remove="${i.key}">Remove</button>
                </div>
              </div>`).join('')}
          </section>
          <aside class="panel sticky">
            <div class="sum-row"><span>Subtotal</span><strong>${money(subtotal)}</strong></div>
            <div class="sum-row"><span>Delivery</span><strong>${money(delivery)}</strong></div>
            <div class="sum-row total"><span>Total</span><strong>${money(total)}</strong></div>
            <a class="btn btn-dark wide" href="checkout.html">Checkout</a>
          </aside>
        </div>` : `<div class="empty-state"><h3>Cart Empty</h3><a class="btn btn-dark" href="shop.html">Menu</a></div>`;
      qsa('[data-less]').forEach(b => b.onclick = () => { setCartQty(b.dataset.less, (getCart().find(x => x.key === b.dataset.less)?.qty || 1) - 1); render(); updateCartBadge(); });
      qsa('[data-more]').forEach(b => b.onclick = () => { setCartQty(b.dataset.more, (getCart().find(x => x.key === b.dataset.more)?.qty || 1) + 1); render(); updateCartBadge(); });
      qsa('[data-remove]').forEach(b => b.onclick = () => { removeCartItem(b.dataset.remove); render(); updateCartBadge(); });
    }
    render();
  }

  function initCheckout() {
    const items = hydrateCart();
    const shell = qs('#checkout-shell');
    if (!items.length) {
      shell.innerHTML = `<div class="empty-state"><h3>Cart Empty</h3><a class="btn btn-dark" href="shop.html">Menu</a></div>`;
      return;
    }
    const profile = getProfile();
    const subtotal = items.reduce((a,b) => a + b.total, 0);
    const delivery = 49;
    const total = subtotal + delivery;
    shell.innerHTML = `
      <form class="checkout-grid" id="checkout-form">
        <section class="panel form-stack">
          <div class="field"><label>Name</label><input required name="name" value="${profile.name || ''}"></div>
          <div class="field"><label>Phone</label><input required name="phone" value="${profile.phone || ''}"></div>
          <div class="field"><label>Address</label><textarea required name="address">${profile.address || ''}</textarea></div>
          <div class="field"><label>Payment</label><div class="pay-row"><button type="button" class="chip active" data-pay="Cash">Cash</button><button type="button" class="chip" data-pay="GCash">GCash</button></div></div>
          <button class="btn btn-dark wide" id="place-btn">Place Order</button>
        </section>
        <aside class="panel sticky">
          ${items.map(i => `<div class="sum-row"><span>${i.product.name} × ${i.qty}</span><strong>${money(i.total)}</strong></div>`).join('')}
          <div class="sum-row"><span>Delivery</span><strong>${money(delivery)}</strong></div>
          <div class="sum-row total"><span>Total</span><strong>${money(total)}</strong></div>
        </aside>
      </form>`;
    let payment = 'Cash';
    qsa('[data-pay]').forEach(b => b.onclick = () => { qsa('[data-pay]').forEach(x => x.classList.remove('active')); b.classList.add('active'); payment = b.dataset.pay; });
    qs('#checkout-form').onsubmit = e => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const name = fd.get('name').trim();
      const phone = fd.get('phone').trim();
      const address = fd.get('address').trim();
      if (!name || !phone || !address) return addToast('Check Fields');
      set(STORAGE.profile, { name, phone, address });
      const order = createOrder({ name, phone, address, payment, items: hydrateCart().map(i => ({ productId: i.productId, qty: i.qty })), status: 'Queued' });
      updateCartBadge();
      location.href = `success.html?id=${order.id}`;
    };
  }

  function initSuccess() {
    const id = new URLSearchParams(location.search).get('id');
    qs('#success-shell').innerHTML = `<div class="success-card panel"><h1>Order Placed</h1><strong>${id || '-'}</strong><div class="page-actions"><a class="btn" href="receipt.html?id=${id}">Receipt</a><a class="btn btn-dark" href="tracking.html?id=${id}">Track Order</a></div></div>`;
  }

  function initReceipt() {
    const id = new URLSearchParams(location.search).get('id');
    const order = getOrders().find(o => o.id === id);
    if (!order) return qs('#receipt-shell').innerHTML = `<div class="empty-state"><h3>No Receipt</h3></div>`;
    qs('#receipt-shell').innerHTML = `
      <article class="receipt panel">
        <div class="receipt-head"><h1>Receipt</h1><strong>${order.id}</strong></div>
        ${order.items.map(i => `<div class="sum-row"><span>${i.name} × ${i.qty}</span><strong>${money(i.total)}</strong></div>`).join('')}
        <div class="sum-row"><span>Delivery</span><strong>${money(order.delivery)}</strong></div>
        <div class="sum-row total"><span>Total</span><strong>${money(order.total)}</strong></div>
      </article>`;
  }

  function initTracking() {
    const id = new URLSearchParams(location.search).get('id');
    const input = qs('#track-input');
    if (id) input.value = id;
    const shell = qs('#tracking-shell');
    function renderTrack() {
      const order = getOrders().find(o => o.id === input.value.trim());
      shell.innerHTML = order ? `
        <div class="tracking-grid">
          <section class="panel">
            <div class="order-head"><div><p>Order</p><h2>${order.id}</h2></div><span class="status ${order.status.toLowerCase().replace(/ /g,'-')}">${order.status}</span></div>
            <div class="timeline">${['Queued','Preparing','On Delivery','Delivered'].map((s, idx) => `<div class="timeline-step ${order.history.some(h => h.label===s) ? 'done' : ''}"><span>${idx+1}</span><p>${s}</p></div>`).join('')}</div>
            <div class="tracking-map">
              <div class="route"></div>
              <div class="route-fill" style="width:${order.mapStep}%"></div>
              <div class="marker shop">Shop</div>
              <div class="marker rider" style="left:calc(${Math.max(order.mapStep,14)}% - 28px)">Rider</div>
              <div class="marker home">Drop</div>
            </div>
          </section>
          <aside class="panel">
            <div class="mini-card"><span>Rider</span><strong>${order.rider?.name || '-'}</strong></div>
            <div class="mini-card"><span>ETA</span><strong>${order.eta}</strong></div>
            <div class="mini-card"><span>Total</span><strong>${money(order.total)}</strong></div>
          </aside>
        </div>` : `<div class="empty-state"><h3>No Order</h3></div>`;
    }
    qs('#track-form').onsubmit = e => { e.preventDefault(); renderTrack(); };
    renderTrack();
  }

  function initAccount() {
    const p = getProfile();
    qs('#account-shell').innerHTML = `
      <form class="panel form-stack narrow" id="profile-form">
        <div class="field"><label>Name</label><input name="name" value="${p.name || ''}"></div>
        <div class="field"><label>Phone</label><input name="phone" value="${p.phone || ''}"></div>
        <div class="field"><label>Address</label><textarea name="address">${p.address || ''}</textarea></div>
        <button class="btn btn-dark">Save</button>
      </form>`;
    qs('#profile-form').onsubmit = e => {
      e.preventDefault();
      const fd = new FormData(e.target);
      set(STORAGE.profile, { name: fd.get('name'), phone: fd.get('phone'), address: fd.get('address') });
      addToast('Saved');
    };
  }

  function initFavorites() {
    const ids = getFavorites();
    const items = getProducts().filter(p => ids.includes(p.id));
    qs('#favorites-grid').innerHTML = items.length ? items.map(productCard).join('') : `<div class="empty-state"><h3>No Favorites</h3></div>`;
  }

  function initHistory() {
    const orders = getOrders();
    qs('#history-list').innerHTML = orders.length ? orders.map(o => `<a class="history-row panel" href="tracking.html?id=${o.id}"><div><strong>${o.id}</strong><p>${o.status}</p></div><div><strong>${money(o.total)}</strong><span>Reorder</span></div></a>`).join('') : `<div class="empty-state"><h3>No Orders</h3></div>`;
  }

  function initSupport() {
    qs('#support-shell').innerHTML = `
      <div class="support-grid">
        <article class="panel"><h3>Phone</h3><strong>0917 555 1100</strong></article>
        <article class="panel"><h3>Email</h3><strong>hello@noirbean.shop</strong></article>
        <article class="panel"><h3>Hours</h3><strong>8AM — 10PM</strong></article>
      </div>
      <div class="faq-list">
        <details class="panel"><summary>Delivery</summary><p>25 to 45 min.</p></details>
        <details class="panel"><summary>Payment</summary><p>Cash or GCash.</p></details>
        <details class="panel"><summary>Pickup</summary><p>Call store desk.</p></details>
      </div>`;
  }

  function initAdmin() {
    const orders = getOrders();
    const products = getProducts();
    const riders = getRiders();
    const notes = get(STORAGE.notifications, []);
    const income = incomeRange();

    const dayAppointments = orders.filter(o => o.status === 'On Delivery' && o.createdAt.slice(0,10) === today()).length;
    qs('#admin-metrics').innerHTML = `
      <div class="metric"><span>Orders</span><strong>${orders.length}</strong></div>
      <div class="metric"><span>Day</span><strong>${money(income.day)}</strong></div>
      <div class="metric"><span>Month</span><strong>${money(income.month)}</strong></div>
      <div class="metric"><span>Year</span><strong>${money(income.year)}</strong></div>
      <button id="appt-kpi" class="metric ${dayAppointments ? 'live' : ''}"><span>Today</span><strong>${dayAppointments}</strong>${dayAppointments ? '<em>Live</em>' : ''}</button>`;

    const needs = orders.filter(o => o.status === 'Queued' || o.status === 'Preparing');
    qs('#admin-overview').innerHTML = `
      <section class="panel"><h3>Attention</h3>${needs.slice(0,4).map(o => `<div class="line-item"><span>${o.id}</span><strong>${o.status}</strong></div>`).join('') || '<div class="line-item"><span>Clear</span><strong>0</strong></div>'}</section>
      <section class="panel"><h3>Low Stock</h3>${products.filter(p => p.stock < 15).slice(0,4).map(p => `<div class="line-item"><span>${p.name}</span><strong>${p.stock}</strong></div>`).join('')}</section>
      <section class="panel"><h3>Riders</h3>${riders.slice(0,4).map(r => `<div class="line-item"><span>${r.name}</span><strong>${r.status}</strong></div>`).join('')}</section>`;

    let filterToday = false;
    function renderOrders() {
      const data = filterToday ? orders.filter(o => o.status === 'On Delivery' && o.createdAt.slice(0,10) === today()) : orders;
      qs('#orders-table').innerHTML = `<table><thead><tr><th>ID</th><th>Items</th><th>Total</th><th>Status</th><th>Rider</th><th></th></tr></thead><tbody>${data.map(o => `<tr><td>${o.id}</td><td>${o.items.length}</td><td>${money(o.total)}</td><td><span class="status ${o.status.toLowerCase().replace(/ /g,'-')}">${o.status}</span></td><td>${o.rider?.name || '-'}</td><td><button class="text-btn" data-view-order="${o.id}">View</button></td></tr>`).join('')}</tbody></table>`;
      qs('#orders-board').innerHTML = ['Queued','Preparing','On Delivery','Delivered'].map(st => `<div class="board-col"><div class="board-head">${st}</div>${data.filter(o => o.status === st).map(o => `<button class="board-card" data-view-order="${o.id}"><strong>${o.id}</strong><span>${money(o.total)}</span><small>${o.rider?.name || '-'}</small></button>`).join('') || '<div class="board-empty">—</div>'}</div>`).join('');
      qsa('[data-view-order]').forEach(b => b.onclick = () => openOrderModal(b.dataset.viewOrder));
    }
    renderOrders();

    qs('#inventory-table').innerHTML = `<table><thead><tr><th>Name</th><th>Category</th><th>Stock</th><th>Price</th><th></th></tr></thead><tbody>${products.map(p => `<tr><td>${p.name}</td><td>${p.category}</td><td>${p.stock < 15 ? `<span class="status low">${p.stock}</span>` : p.stock}</td><td>${money(p.price)}</td><td><button class="text-btn">Edit</button></td></tr>`).join('')}</tbody></table>`;

    qs('#riders-grid').innerHTML = riders.map(r => `<article class="panel rider-card"><div><h3>${r.name}</h3><p>${r.zone}</p></div><span class="status ${r.status.toLowerCase()}">${r.status}</span><button class="btn" data-rider-toggle="${r.id}">Toggle</button></article>`).join('');
    qsa('[data-rider-toggle]').forEach(b => b.onclick = () => {
      const list = getRiders();
      const rider = list.find(r => r.id === b.dataset.riderToggle);
      rider.status = rider.status === 'Available' ? 'Offline' : 'Available';
      set(STORAGE.riders, list);
      location.reload();
    });

    qs('#notes-list').innerHTML = notes.map(n => `<div class="note-item"><span>${n.text}</span><strong>${n.time}</strong></div>`).join('');
    qs('#chart-bars').innerHTML = [32,52,45,61,55,74,63].map(v => `<div class="bar" style="height:${v}%"></div>`).join('');
    qs('#top-items').innerHTML = products.slice(0,6).map(p => `<div class="line-item"><span>${p.name}</span><strong>${Math.max(12, 40 - p.stock)}</strong></div>`).join('');

    qs('#appt-kpi')?.addEventListener('click', (e) => {
      if (!dayAppointments) return;
      filterToday = !filterToday;
      e.currentTarget.classList.toggle('cancel', filterToday);
      renderOrders();
    });

    qsa('[data-admin-tab]').forEach(btn => btn.onclick = () => {
      qsa('[data-admin-tab]').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
      qsa('[data-admin-panel]').forEach(p => p.hidden = p.id !== btn.dataset.adminTab);
    });
  }

  function openOrderModal(id) {
    const o = getOrders().find(x => x.id === id);
    if (!o) return;
    const modal = qs('#modal');
    modal.innerHTML = `
      <div class="modal-backdrop" data-close-modal></div>
      <div class="modal-card">
        <div class="modal-head"><h3>${o.id}</h3><button class="btn btn-icon" data-close-modal>${icon('close')}</button></div>
        <div class="modal-body">
          <div class="sum-row"><span>Status</span><strong>${o.status}</strong></div>
          <div class="sum-row"><span>Rider</span><strong>${o.rider?.name || '-'}</strong></div>
          <div class="sum-row"><span>Total</span><strong>${money(o.total)}</strong></div>
          ${o.items.map(i => `<div class="sum-row"><span>${i.name} × ${i.qty}</span><strong>${money(i.total)}</strong></div>`).join('')}
        </div>
        <div class="modal-foot">
          <button class="btn" data-next-status="Preparing" ${o.status !== 'Queued' ? 'disabled' : ''}>Prepare</button>
          <button class="btn" data-next-status="On Delivery" ${o.status !== 'Preparing' ? 'disabled' : ''}>Dispatch</button>
          <button class="btn btn-dark" data-next-status="Delivered" ${o.status !== 'On Delivery' ? 'disabled' : ''}>Complete</button>
        </div>
      </div>`;
    modal.classList.add('open');
    qsa('[data-close-modal]', modal).forEach(b => b.onclick = () => modal.classList.remove('open'));
    qsa('[data-next-status]', modal).forEach(b => b.onclick = () => { updateOrderStatus(id, b.dataset.nextStatus); modal.classList.remove('open'); location.reload(); });
  }

  function route() {
    mountShared();
    const page = document.body.dataset.page;
    ({ home:initHome, shop:initShop, product:initProduct, cart:initCart, checkout:initCheckout, success:initSuccess, tracking:initTracking, account:initAccount, favorites:initFavorites, history:initHistory, support:initSupport, admin:initAdmin, receipt:initReceipt }[page] || (()=>{}))();
  }

  return { route, icon };
})();

document.addEventListener('DOMContentLoaded', NB.route);
