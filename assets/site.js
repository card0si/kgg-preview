function kggMenu(b){var n=document.querySelector('.mainnav');var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)}
document.querySelectorAll('.dd-t').forEach(function(b){b.addEventListener('click',function(){var li=b.parentNode;var o=li.classList.toggle('open');b.setAttribute('aria-expanded',o)})});
function kggSubmit(f){var ok=true;f.querySelectorAll('[required]').forEach(function(el){var bad=!el.value.trim()||(el.type==='email'&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value));el.classList.toggle('bad',bad);if(bad)ok=false});
f.querySelector('.err').hidden=ok;if(ok){f.hidden=true;var t=document.getElementById('thanks');if(t){t.hidden=false;t.scrollIntoView({block:'center'})}}return false}
(function(){var b=document.querySelector('.burger');if(b)b.addEventListener('click',function(){document.body.classList.toggle('menu-open',b.getAttribute('aria-expanded')==='true')});
document.addEventListener('keydown',function(e){if(e.key==='Escape')document.querySelectorAll('.has-dd.open').forEach(function(l){l.classList.remove('open')})})})();
