(function () {
  var hdr = document.querySelector('.hdr');
  var burger = document.querySelector('.burger');

  // Header turns solid once the page scrolls past the top
  function onScroll() { hdr.classList.toggle('solid', window.scrollY > 24); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  if (burger) {
    burger.addEventListener('click', function () {
      var open = hdr.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && hdr.classList.contains('open')) burger.click();
    });
  }

  // Fit the hero and the domain cards on the first screen (desktop). If the cards would
  // end below the fold, shrink the brand title step by step until they fit.
  var hero = document.querySelector('.hero'), doms = document.querySelector('.domains');
  var brand = hero && hero.querySelector('.brandname');
  function fit() {
    if (!hero || !doms || !brand) return;
    brand.style.fontSize = '';
    if (window.innerWidth < 901) return;
    var base = parseFloat(getComputedStyle(brand).fontSize), size = base;
    for (var i = 0; i < 12; i++) {
      var over = doms.getBoundingClientRect().bottom + window.scrollY - window.innerHeight;
      if (over <= 0 || size <= 40) break;
      size = Math.max(40, size - Math.max(4, over / 2.2));
      brand.style.fontSize = size + 'px';
    }
  }
  fit();
  window.addEventListener('resize', fit);
  window.addEventListener('load', fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);

  // Domain selector: the first panel starts open so the row never looks collapsed
  var domains = document.querySelectorAll('.domain');
  if (domains.length) {
    var box = domains[0].parentElement;
    domains[0].classList.add('on');
    domains.forEach(function (d) {
      d.addEventListener('mouseenter', function () { domains.forEach(function (x) { x.classList.toggle('on', x === d); }); });
      d.addEventListener('focus', function () { domains.forEach(function (x) { x.classList.toggle('on', x === d); }); });
    });
    box.addEventListener('mouseleave', function () { /* keep last hovered open */ });
  }

  // Contact form: checks required fields, then shows the confirmation.
  // TODO: point the form's action at a form service (Formspree, Basin, Netlify Forms) to actually deliver messages.
  var form = document.querySelector('form.form');
  if (form) {
    form.addEventListener('submit', function (e) {
      var bad = [];
      form.querySelectorAll('[required]').forEach(function (f) {
        var invalid = !f.value.trim() || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value));
        f.setAttribute('aria-invalid', invalid);
        if (invalid) bad.push(f);
      });
      var err = form.querySelector('.err');
      if (bad.length) {
        e.preventDefault();
        err.hidden = false;
        err.textContent = 'Add your ' + bad.map(function (f) { return f.dataset.name; }).join(', ') + ' so we can reply.';
        bad[0].focus();
        return;
      }
      if (!form.getAttribute('action')) {
        e.preventDefault();
        err.hidden = true;
        form.querySelectorAll('.field').forEach(function (f) { f.hidden = true; });
        var ok = form.querySelector('.ok');
        ok.hidden = false;
        ok.focus();
      }
    });
  }

  // Clients and ventures: flip between cards with tabs, arrows, keys and a timer
  document.querySelectorAll('[data-flipper]').forEach(function (root) {
    var tabs = [].slice.call(root.querySelectorAll('.flip-tab'));
    var cards = [].slice.call(root.querySelectorAll('.flip-card'));
    var cur = 0, busy = false, timer = null, hover = false;
    var ms = +root.dataset.interval || 8000;
    var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    root.style.setProperty('--interval', ms + 'ms');

    function show(i, dir) {
      if (busy || i === cur) return;
      busy = true;
      var out = cards[cur], inn = cards[i];
      dir = dir || (i > cur ? 1 : -1);
      out.style.setProperty('--dir', dir); inn.style.setProperty('--dir', dir);
      out.classList.add('is-leaving'); out.classList.remove('is-active'); out.setAttribute('inert', '');
      inn.classList.add('is-active', 'is-entering'); inn.removeAttribute('inert');
      tabs.forEach(function (t, k) { t.setAttribute('aria-selected', k === i); t.tabIndex = k === i ? 0 : -1; });
      cur = i;
      inn.addEventListener('animationend', function done(e) {
        if (e.target !== inn) return;
        inn.removeEventListener('animationend', done);
        inn.classList.remove('is-entering'); out.classList.remove('is-leaving'); busy = false;
      });
      restart();
    }
    function step(d) { show((cur + d + cards.length) % cards.length, d); }
    function restart() {
      clearTimeout(timer);
      if (still || cards.length < 2) return;
      root.classList.remove('timed'); void root.offsetWidth; root.classList.add('timed');
      if (root.classList.contains('paused')) { left = ms; return; }
      tick(ms);
    }
    var left = ms, started = 0;
    function tick(t) { left = t; started = Date.now(); clearTimeout(timer); timer = setTimeout(function () { step(1); }, t); }
    function pause() { if (root.classList.contains('paused')) return; root.classList.add('paused'); clearTimeout(timer); left -= Date.now() - started; }
    function resume() { if (!root.classList.contains('paused')) return; root.classList.remove('paused'); if (!still) tick(Math.max(left, 600)); }

    tabs.forEach(function (t, k) {
      t.addEventListener('click', function () { show(k); });
      t.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        e.preventDefault(); step(d); tabs[cur].focus();
      });
    });
    root.querySelectorAll('.flip-btn').forEach(function (b) { b.addEventListener('click', function () { step(+b.dataset.dir); }); });
    root.addEventListener('mouseenter', function () { hover = true; pause(); });
    root.addEventListener('mouseleave', function () { hover = false; resume(); });
    root.addEventListener('focusin', pause);
    root.addEventListener('focusout', function () { if (!hover && !root.contains(document.activeElement)) resume(); });
    document.addEventListener('visibilitychange', function () { document.hidden ? pause() : (!hover && resume()); });
    // only start the timer once the section is on screen
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { restart(); io.disconnect(); } }, { threshold: .35 });
      io.observe(root);
    } else restart();
  });

  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
