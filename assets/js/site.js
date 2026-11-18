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

  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
