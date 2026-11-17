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

  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
