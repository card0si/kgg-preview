(function () {
  var hdr = document.querySelector('.hdr');
  var burger = document.querySelector('.burger');

  // Header turns solid once the page scrolls past the top
  var hasHero = !!document.querySelector('.hero,.phero');
  function onScroll() { hdr.classList.toggle('solid', !hasHero || window.scrollY > 24); }
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

  // Contact form.
  // Until a Web3Forms access key is set below, submitting opens the visitor's email app with the
  // message filled in (nothing is claimed as "sent"). Once the key is set, messages are delivered
  // through Web3Forms and only a confirmed success redirects to /thanks/.
  var WEB3FORMS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'; // TODO(owner): paste the Web3Forms access key here
  var CONTACT_EMAIL = 'contact@kentonglobalgroup.com';
  var form = document.querySelector('form.form');
  if (form) {
    var err = form.querySelector('.err'), ok = form.querySelector('.ok');
    var hasKey = WEB3FORMS_KEY && WEB3FORMS_KEY.indexOf('YOUR_') !== 0;
    function val(n) { var f = form.elements[n]; return f ? f.value.trim() : ''; }
    function showOk(html) { ok.innerHTML = html; ok.hidden = false; ok.focus(); }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = [];
      form.querySelectorAll('[required]').forEach(function (f) {
        var invalid = !f.value.trim() || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value));
        f.setAttribute('aria-invalid', invalid);
        if (invalid) bad.push(f);
      });
      if (bad.length) {
        err.hidden = false;
        err.textContent = 'Add your ' + bad.map(function (f) { return f.dataset.name; }).join(', ') + ' so we can reply.';
        bad[0].focus();
        return;
      }
      err.hidden = true;
      if (form.elements.botcheck && form.elements.botcheck.checked) return; // honeypot
      var subject = 'Website enquiry: ' + val('topic') + (val('organization') ? ' (' + val('organization') + ')' : '');
      var body = 'Name: ' + val('name') + '\nBusiness: ' + (val('organization') || '-') + '\nEmail: ' + val('email') +
        '\nPhone: ' + (val('phone') || '-') + '\nNeeds: ' + val('topic') + '\n\n' + val('message');
      var mailto = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      var fallback = '<p><strong>Your email app should open with your message ready to send.</strong> Press send there to reach us.</p>' +
        '<p>If nothing opened, email <a href="' + mailto + '">' + CONTACT_EMAIL + '</a> or call <a href="tel:+18598881429">(859) 888-1429</a>.</p>';
      if (!hasKey || !window.fetch) { window.location.href = mailto; showOk(fallback); return; }
      var btn = form.querySelector('button[type=submit]');
      btn.disabled = true; btn.textContent = 'Sending...';
      fetch('https://api.web3forms.com/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject: subject, from_name: 'kentonglobalgroup.com',
          name: val('name'), email: val('email'), phone: val('phone'), organization: val('organization'), topic: val('topic'), message: val('message') })
      }).then(function (r) { return r.json(); }).then(function (j) {
        if (j && j.success) { window.location.href = form.dataset.thanks || '../thanks/'; return; }
        throw new Error('not sent');
      }).catch(function () {
        btn.disabled = false; btn.textContent = 'Send message';
        err.hidden = false;
        err.innerHTML = 'Your message did not go through. Please email <a href="' + mailto + '">' + CONTACT_EMAIL + '</a> or call <a href="tel:+18598881429">(859) 888-1429</a>.';
      });
    });
  }

  // Google Analytics 4: inert until a real measurement ID is set.
  var GA_ID = 'G-XXXXXXX'; // TODO(owner): replace with the GA4 measurement ID, then update the Privacy page
  if (GA_ID && GA_ID !== 'G-XXXXXXX') {
    var gs = document.createElement('script');
    gs.async = true; gs.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(gs);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
    // count the thank-you page as a conversion
    if (/\/thanks\/?$/.test(location.pathname)) window.gtag('event', 'generate_lead');
  }

  // Work bookshelf: a spine pulls out and opens into a two-page spread (native modal dialog).
  var books = document.querySelectorAll('.book[data-book]');
  if (books.length && typeof HTMLDialogElement === 'function') {
    var still = window.matchMedia('(prefers-reduced-motion: reduce)');
    var narrow = window.matchMedia('(max-width: 760px)');
    var EASE = 'cubic-bezier(.2,.7,.2,1)';
    function canAnimate(el) { return !still.matches && typeof el.animate === 'function'; }

    function openAnim(dlg, spine) {
      var spread = dlg.querySelector('.spread'), cover = dlg.querySelector('.cover');
      var fade = dlg.querySelectorAll('.pl, .pr, .tclose');
      if (narrow.matches) {
        return [spread.animate([{ transform: 'translateY(48px)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 360, easing: EASE })];
      }
      // Start as a closed book sitting where the spine is, grow to full size, then swing the cover open.
      var a = spine.getBoundingClientRect(), b = spread.getBoundingClientRect();
      var s = Math.max(0.15, a.height / b.height);
      var tx = (a.left + a.width / 2) - (b.left + b.width / 2) - s * b.width / 4;
      var ty = (a.top + a.height / 2) - (b.top + b.height / 2);
      var T = 920, mid = 0.42, list = [];
      list.push(spread.animate([
        { transform: 'translate(' + tx + 'px,' + ty + 'px) scale(' + s + ')', opacity: 0.4 },
        { transform: 'translateX(-25%)', opacity: 1, offset: mid },
        { transform: 'none' }
      ], { duration: T, easing: EASE }));
      // Hide the open spread's frame while the book is still closed.
      list.push(spread.animate([
        { background: 'transparent', borderColor: 'transparent', boxShadow: 'none' },
        { background: 'transparent', borderColor: 'transparent', boxShadow: 'none', offset: mid + 0.1 },
        {}
      ], { duration: T }));
      list.push(cover.animate([
        { transform: 'rotateY(0deg)' }, { transform: 'rotateY(0deg)', offset: mid }, { transform: 'rotateY(-180deg)' }
      ], { duration: T, easing: 'ease-in-out' }));
      fade.forEach(function (el) {
        list.push(el.animate([{ opacity: 0 }, { opacity: 0, offset: mid + 0.12 }, { opacity: 1 }], { duration: T }));
      });
      return list;
    }

    // Step inside: the screenshot swells to fill the screen while the open book is pulled into it.
    // The new tab opens when the dive ends (~650ms), still inside the browser's user-activation window.
    var DIVE_MS = 650;
    function dive(dlg) {
      var link = dlg.querySelector('.peek'), img = link && link.querySelector('img'), spread = dlg.querySelector('.spread');
      if (!img || !canAnimate(dlg)) return null;
      var r = img.getBoundingClientRect(), b = spread.getBoundingClientRect();
      var vw = document.documentElement.clientWidth, vh = window.innerHeight;
      var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      var origin = (cx - b.left) + 'px ' + (cy - b.top) + 'px';
      var ghost = document.createElement('img');
      ghost.className = 'dive'; ghost.alt = ''; ghost.setAttribute('aria-hidden', 'true');
      ghost.src = img.currentSrc || img.src;
      var veil = document.createElement('div');
      veil.className = 'veil'; veil.setAttribute('aria-hidden', 'true');
      veil.style.setProperty('--cx', cx + 'px'); veil.style.setProperty('--cy', cy + 'px');
      var from = { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px' };
      ghost.style.cssText = 'left:' + from.left + ';top:' + from.top + ';width:' + from.width + ';height:' + from.height;
      dlg.classList.add('diving');
      dlg.appendChild(veil); dlg.appendChild(ghost);
      var T = DIVE_MS, anims = [], done = false;
      anims.push(spread.animate([
        { transformOrigin: origin, transform: 'none', filter: 'none', opacity: 1 },
        { transformOrigin: origin, transform: 'scale(1.03) rotate(.6deg)', filter: 'none', opacity: 1, offset: 0.15 },
        { transformOrigin: origin, transform: 'scale(.55) rotate(-12deg)', filter: 'blur(1px)', opacity: 1, offset: 0.7 },
        { transformOrigin: origin, transform: 'scale(.18) rotate(-24deg)', filter: 'blur(4px)', opacity: 0 }
      ], { duration: T * 0.7, easing: 'cubic-bezier(.5,0,.75,0)', fill: 'forwards' }));
      anims.push(veil.animate([{ opacity: 0 }, { opacity: 1, offset: 0.55 }, { opacity: 1 }], { duration: T, easing: 'ease-in', fill: 'forwards' }));
      anims.push(ghost.animate([
        { left: from.left, top: from.top, width: from.width, height: from.height, transform: 'none', boxShadow: '0 0 0 6px #FFFDF8, 0 30px 60px -20px rgba(0,0,0,.7)' },
        { left: from.left, top: from.top, width: from.width, height: from.height, transform: 'scale(.92)', offset: 0.38 },
        { left: '0px', top: '0px', width: vw + 'px', height: vh + 'px', transform: 'none', boxShadow: '0 0 0 0 #FFFDF8, 0 0 0 0 rgba(0,0,0,0)' }
      ], { duration: T, easing: 'cubic-bezier(.65,0,.25,1)', fill: 'forwards' }));
      function clear() {
        if (done) return;
        done = true;
        anims.forEach(function (x) { x.cancel(); });
        if (ghost.parentNode) ghost.parentNode.removeChild(ghost);
        if (veil.parentNode) veil.parentNode.removeChild(veil);
        dlg.classList.remove('diving');
      }
      return clear;
    }

    books.forEach(function (spine) {
      var dlg = document.getElementById(spine.dataset.book);
      if (!dlg) return;
      var running = [], closing = false, undive = null, lastPeek = 0, peekTimer = 0;
      function stop() {
        running.forEach(function (x) { x.cancel(); }); running = [];
        if (peekTimer) { clearTimeout(peekTimer); peekTimer = 0; }
        if (undive) { undive(); undive = null; }
      }
      function finish() { dlg.close(); }
      function shut() {
        if (closing || !dlg.open) return;
        closing = true;
        stop();
        if (!canAnimate(dlg)) { finish(); return; }
        running = openAnim(dlg, spine).map(function (x) { x.effect.updateTiming({ fill: 'both' }); x.playbackRate = narrow.matches ? 1.4 : 1.6; x.reverse(); return x; });
        running[0].finished.then(finish, function () {});
      }
      spine.addEventListener('click', function () {
        if (dlg.open) return;
        closing = false;
        spine.classList.add('out');
        document.documentElement.classList.add('tome-open');
        dlg.showModal();
        var img = dlg.querySelector('img');
        if (img && img.loading === 'lazy') img.loading = 'eager';
        if (canAnimate(dlg)) running = openAnim(dlg, spine);
      });
      // Screenshot (click, tap or Enter): play the dive, then open the site when it ends.
      // The open is scheduled from this click handler so it stays inside the user-activation window.
      var peek = dlg.querySelector('.peek');
      if (peek) peek.addEventListener('click', function (e) {
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // let the browser handle modified clicks
        e.preventDefault();
        if (closing || Date.now() - lastPeek < 900) return; // no double tabs on a double click
        lastPeek = Date.now();
        stop();
        function go() {
          peekTimer = 0;
          var w = window.open(peek.href, '_blank');
          if (w) { try { w.opener = null; } catch (err) {} }
          if (undive) { undive(); undive = null; }
          if (!w) location.assign(peek.href); // blocked: continue in this tab after the animation
        }
        if (!canAnimate(dlg)) { go(); return; }
        undive = dive(dlg);
        peekTimer = setTimeout(go, DIVE_MS);
      });
      dlg.addEventListener('cancel', function (e) { e.preventDefault(); shut(); });
      dlg.querySelector('.tclose').addEventListener('click', shut);
      // A click on the backdrop lands on the dialog element itself.
      dlg.addEventListener('click', function (e) { if (e.target === dlg) shut(); });
      dlg.addEventListener('close', function () {
        stop(); closing = false;
        spine.classList.remove('out');
        document.documentElement.classList.remove('tome-open');
        spine.focus();
      });
    });
    // Warm the screenshots once the shelf is near, so books open on a loaded page.
    if ('IntersectionObserver' in window) {
      var shelf = document.querySelector('.shelf');
      var io = new IntersectionObserver(function (en) {
        if (!en[0].isIntersecting) return;
        io.disconnect();
        document.querySelectorAll('.tome img').forEach(function (i) { var w = new Image(); w.src = i.currentSrc || i.src; });
      }, { rootMargin: '400px' });
      io.observe(shelf);
    }
  }

  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
