/* scripts.js - combined: toggle + full 29-item calculator + form handlers */
(function(){
  'use strict';

  /* ---------- Utilities ---------- */
  function safeParse(json, fallback){ try { return JSON.parse(json); } catch(e){ return fallback; } }
  function $(sel){ return document.querySelector(sel); }
  function $all(sel){ return Array.from(document.querySelectorAll(sel)); }
  function fmtINR(num){ return '₹ ' + Number(num || 0).toLocaleString('en-IN',{minimumFractionDigits:2,maximumFractionDigits:2}); }

 /* ---------- Toggle Pickup / Franchise ---------- */
function initToggle(){
  const pickupForm = document.querySelector('#pickupForm');
  const franchiseForm = document.querySelector('#franchiseForm');
  if(!pickupForm || !franchiseForm) return;

  const pickBtn = document.querySelector('.form-toggle .toggle-btn[data-form="pickup"]');
  const franBtn = document.querySelector('.form-toggle .toggle-btn[data-form="franchise"]');

  function activate(active, inactive){
    if(!active || !inactive) return;
    active.classList.add('active');
    inactive.classList.remove('active');
  }
  function showPickup(){
    pickupForm.classList.remove('hidden'); pickupForm.style.display='';
    franchiseForm.classList.add('hidden'); franchiseForm.style.display='none';
    activate(pickBtn, franBtn);
  }
  function showFranchise(){
    franchiseForm.classList.remove('hidden'); franchiseForm.style.display='';
    pickupForm.classList.add('hidden'); pickupForm.style.display='none';
    activate(franBtn, pickBtn);
  }

  if(pickBtn) pickBtn.addEventListener('click', showPickup);
  if(franBtn) franBtn.addEventListener('click', showFranchise);

  showPickup();
}


  /* ---------- Scrap Price Calculator ---------- */
  function initCalculator(){
    const ITEMS = [
      { id: 'newspaper', name: 'Newspaper', price: 14, unit: 'kg' },
      { id: 'copy_paper', name: 'Copy', price: 12, unit: 'kg' },
      { id: 'book', name: 'Book', price: 10, unit: 'kg' },
      { id: 'magazine', name: 'Magazine', price: 8, unit: 'kg' },
      { id: 'copy_book_mix', name: 'Copy + Book Mix', price: 10, unit: 'kg' },
      { id: 'cartoon', name: 'Cartoon', price: 10, unit: 'kg' },
      { id: 'iron', name: 'Iron', price: 25, unit: 'kg' },
      { id: 'cutting_iron', name: 'Cutting Iron', price: 15, unit: 'kg' },
      { id: 'tina', name: 'Tina', price: 12, unit: 'kg' },
      { id: 'steel', name: 'Steel', price: 40, unit: 'kg' },
      { id: 'al_cast', name: 'Aluminium (Cast)', price: 100, unit: 'kg' },
      { id: 'al_beat', name: 'Aluminium (Beat)', price: 120, unit: 'kg' },
      { id: 'plastic_black', name: 'Plastic (Black)', price: 2, unit: 'kg' },
      { id: 'plastic_hard', name: 'Plastic (Hard)', price: 2, unit: 'kg' },
      { id: 'plastic_soft', name: 'Plastic (Soft)', price: 10, unit: 'kg' },
      { id: 'bottle_quarter', name: 'Bottle (Quarter)', price: 50, unit: 'pc' },
      { id: 'bottle_full', name: 'Bottle (Full)', price: 1, unit: 'pc' },
      { id: 'beer_bottle', name: 'Beer Bottle', price: 1, unit: 'pc' },
      { id: 'computer', name: 'Computer', price: 15, unit: 'kg' },
      { id: 'cpu', name: 'CPU', price: 25, unit: 'kg' },
      { id: 'ups', name: 'U.P.S', price: 30, unit: 'kg' },
      { id: 'battery_black', name: 'Battery (Black Dry)', price: 90, unit: 'kg' },
      { id: 'battery_liquid', name: 'Battery (Liquid)', price: 100, unit: 'kg' },
      { id: 'tyre', name: 'Tyre (4+6 Wheeler only)', price: 5, unit: 'kg' },
      { id: 'tube', name: 'Tube', price: 10, unit: 'kg' },
      { id: 'fridge_big', name: 'Frize (Big)', price: 400, unit: 'pc' },
      { id: 'fridge_small', name: 'Frize (Small)', price: 300, unit: 'pc' }
    ];

    const GST_RATE = 0;
    const container = $('#itemsContainer');
    if(!container) return;

    const items_total_el = $('#items_total');
    const tax_total_el = $('#tax_total');
    const calc_total_el = $('#calc_total');
    const gstRateEl = $('#gst_rate');
    if(gstRateEl) gstRateEl.textContent = GST_RATE;

    // Build rows dynamically
    ITEMS.forEach(item=>{
      const row = document.createElement('div');
      row.className = 'calc-row';
      row.style.cssText = 'display:flex;align-items:center;gap:12px;justify-content:space-between;padding:8px 6px;border-radius:8px;background:linear-gradient(180deg,#ffffff,#fcfffd);border:1px solid rgba(0,0,0,0.02)';

      const left = document.createElement('div');
      left.style.flex = '1';
      const title = document.createElement('div');
      title.style.fontWeight = '800';
      title.innerHTML = `${item.name} <small style="font-weight:600;color:var(--muted)"> (${item.unit})</small>`;
      left.appendChild(title);

      const input = document.createElement('input');
      input.type = 'number';
      input.min = '0';
      input.step = item.unit === 'pc' ? '1' : '0.01';
      input.placeholder = '0';
      input.id = item.id + '_qty';
      input.className = 'calc-input';
      input.style.cssText = 'width:140px;padding:8px;border-radius:8px;border:1px solid #edf5f0;margin-top:8px';
      left.appendChild(input);

      const right = document.createElement('div');
      right.style.textAlign = 'right';
      right.style.width = '180px';
      right.innerHTML = `
        <div style="color:var(--muted);font-size:13px">Price</div>
        <div id="${item.id}_price_display" style="font-weight:800;margin-top:6px">${fmtINR(item.price)}${item.unit==='kg'?'/kg':'/pc'}</div>
        <div id="${item.id}_total" style="margin-top:6px;color:var(--green);font-weight:900">₹ 0.00</div>
      `;

      row.appendChild(left); row.appendChild(right);
      container.appendChild(row);

      // Input live update + Enter triggers total
      input.addEventListener('input', ()=>{ updateItemTotal(item); updateTotals(); });
      input.addEventListener('keydown', e=>{ if(e.key==='Enter'){ e.preventDefault(); updateTotals(); }});
    });

    function updateItemTotal(item){
      const qty = parseFloat($('#'+item.id+'_qty').value) || 0;
      const total = qty * item.price;
      const el = $('#'+item.id+'_total');
      if (el) el.textContent = fmtINR(total);
      return total;
    }
    function computeItemsTotal(){
      return ITEMS.reduce((sum,it)=>{
        const qty = parseFloat($('#'+it.id+'_qty').value) || 0;
        return sum + qty*it.price;
      },0);
    }
    function updateTotals(){
      const itemsTotal = computeItemsTotal();
      const tax = itemsTotal*(GST_RATE/100);
      const grand = itemsTotal+tax;
      if(items_total_el) items_total_el.textContent = fmtINR(itemsTotal);
      if(tax_total_el) tax_total_el.textContent = fmtINR(tax);
      if(calc_total_el) calc_total_el.textContent = fmtINR(grand);
    }

    // Buttons
    const calcBtn = $('#calcBtn');
    const resetBtn = $('#resetBtn');
    if(calcBtn) calcBtn.addEventListener('click', e=>{ e.preventDefault(); ITEMS.forEach(updateItemTotal); updateTotals(); });
    if(resetBtn) resetBtn.addEventListener('click', e=>{ e.preventDefault(); ITEMS.forEach(it=>{ const inp = $('#'+it.id+'_qty'); if(inp) inp.value=''; const totalEl = $('#'+it.id+'_total'); if(totalEl) totalEl.textContent='₹ 0.00'; }); updateTotals(); });

    updateTotals();
  }

  /* ---------- Form save (local fallback) ---------- */
  function initForms(){
    const pickupForm = $('#pickupForm');
    if(pickupForm){
      pickupForm.addEventListener('submit', e=>{
        e.preventDefault();
        const data = {
          name: pickupForm.querySelector('#name')?.value || '',
          phone: pickupForm.querySelector('#phone')?.value || '',
          city: pickupForm.querySelector('#city')?.value || '',
          category: pickupForm.querySelector('select[name="category"]')?.value || '',
          ts: new Date().toISOString()
        };
        const arr = safeParse(localStorage.getItem('a1_leads') || '[]', []);
        arr.unshift(data);
        localStorage.setItem('a1_leads', JSON.stringify(arr));
        alert('Pickup request saved locally.');
        pickupForm.reset();
      });
    }

    const franchiseForm = $('#franchiseForm');
    if(franchiseForm){
      franchiseForm.addEventListener('submit', e=>{
        e.preventDefault();
        const data = {
          fullname: franchiseForm.querySelector('#fname')?.value || '',
          phone: franchiseForm.querySelector('#fphone')?.value || '',
          email: franchiseForm.querySelector('#femail')?.value || '',
          city: franchiseForm.querySelector('#fcity')?.value || '',
          state: franchiseForm.querySelector('#state')?.value || '',
          investment: franchiseForm.querySelector('select[name="investment"]')?.value || '',
          reason: franchiseForm.querySelector('#reason')?.value || '',
          ts: new Date().toISOString()
        };
        const arr = safeParse(localStorage.getItem('a1_franchise_leads') || '[]', []);
        arr.unshift(data);
        localStorage.setItem('a1_franchise_leads', JSON.stringify(arr));
        alert('Franchise application saved locally.');
        franchiseForm.reset();
        document.querySelector('.form-toggle .toggle-btn[data-form="pickup"]')?.click();
      });
    }
  }

  /* ---------- Init all ---------- */
  document.addEventListener('DOMContentLoaded', ()=>{
    initToggle();
    initCalculator();
    initForms();
    const y = $('#year'); if(y) y.textContent = new Date().getFullYear();
  });

})(); // end main IIFE


/* floating label fix: add placeholder attribute dynamically so :placeholder-shown works reliably
   (moved into DOMContentLoaded guard originally — now we ensure it runs when DOM exists) */
document.addEventListener('DOMContentLoaded', function(){
  var fieldEls = Array.from(document.querySelectorAll('.field input, .field textarea') || []);
  fieldEls.forEach(function(el){
    try{
      if(!el.getAttribute('placeholder')) el.setAttribute('placeholder',' ');
    }catch(e){}
  });

  // small client-side submit animation / friendly UX
  const form = document.getElementById('contactPageForm');
  if (form) {
    form.addEventListener('submit', function(e){
      // simple UX: replace button text with sending animation; allow native submit to continue
      const btn = form.querySelector('button[type="submit"]');
      if(btn){
        btn.disabled = true;
        btn.style.transform = 'translateY(0)';
        btn.innerHTML = '<span class="btn-inner">Sending…</span>';
      }
      // no preventDefault — leave to Formspree / server
    });
  }

  // YEAR in footer if you have <span id="year"></span>
  try{ document.getElementById('year').textContent = new Date().getFullYear(); }catch(e){}
});

/* ===========================================================
   REPLACED: old overlay mobile menu code (it caused full-screen overlay)
   and INSTALLED: in-flow mobile hamburger injector that appears on every page
   This injector does not modify your HTML files on disk; it inserts the hamburger
   into the DOM at runtime (after the first <header>) so the behavior is present
   on every page without editing each file. The injected menu is hidden on desktop.
   =========================================================== */

(function(){
  // avoid duplicate injection
  if (document.getElementById('mobile-collapsible-nav-inject')) return;

  function ready(fn){
    if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function(){
    // if the old overlay elements exist, don't touch them but avoid double-inject
    if (document.getElementById('site-collapsible-menu') || document.getElementById('mobile-nav')) {
      // in case an overlay mobile-nav exists, we will still inject the in-flow menu to avoid overlay blocking
      // but do not remove anything from DOM — safe and non-destructive
    }

    // locate insertion point: after the first header
    var header = document.querySelector('header');
    var anchor = header ? header : document.body;

    // build wrapper
    var wrapper = document.createElement('div');
    wrapper.id = 'mobile-collapsible-nav-inject';
    wrapper.className = 'mobile-collapsible-nav';
    wrapper.innerHTML = '\
      <button id="hamburger-inject" class="hamburger" aria-expanded="false" aria-controls="site-collapsible-menu" aria-label="Open menu">\
        <span class="hamburger-line" aria-hidden="true"></span>\
        <span class="hamburger-line" aria-hidden="true"></span>\
        <span class="hamburger-line" aria-hidden="true"></span>\
      </button>\
      <nav id="site-collapsible-menu" class="collapsible-menu" aria-hidden="true">\
        <ul class="collapsible-list">\
          <li><a href="index.html">Home</a></li>\
          <li><a href="services.html">Services</a></li>\
          <li><a href="initiatives.html">Initiatives</a></li>\
          <li><a href="franchise.html">Franchise</a></li>\
          <li><a href="about.html">About</a></li>\
          <li><a href="contact.html">Contact</a></li>\
          <li><a href="career.html">Careers</a></li>\
        </ul>\
      </nav>';

    if (header && header.parentNode) header.parentNode.insertBefore(wrapper, header.nextSibling);
    else document.body.insertBefore(wrapper, document.body.firstChild);

    // inject scoped CSS once
    if (!document.querySelector('style[data-injected="mobile-collapsible-nav"]')) {
      var css = '\
/* injected mobile in-flow collapsible menu - hidden on desktop */\
#mobile-collapsible-nav-inject { width:100%; z-index:20; box-sizing:border-box; }\
#mobile-collapsible-nav-inject .hamburger { display:flex; flex-direction:column; gap:6px; width:48px; height:48px; align-items:center; justify-content:center; margin:12px 16px; background: rgba(0,0,0,0.45); border-radius:10px; border:1px solid rgba(255,255,255,0.04); cursor:pointer; -webkit-tap-highlight-color: transparent; }\
#mobile-collapsible-nav-inject .hamburger-line { width:22px; height:2px; background:#fff; border-radius:2px; transition: transform 220ms ease, opacity 220ms ease; }\
#mobile-collapsible-nav-inject .hamburger.open .hamburger-line:nth-child(1) { transform: translateY(6px) rotate(45deg); }\
#mobile-collapsible-nav-inject .hamburger.open .hamburger-line:nth-child(2) { opacity:0; transform: scaleX(0.2); }\
#mobile-collapsible-nav-inject .hamburger.open .hamburger-line:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }\
#mobile-collapsible-nav-inject .collapsible-menu { overflow:hidden; max-height:0; transition: max-height 360ms cubic-bezier(.2,.9,.2,1), opacity 260ms ease; opacity:0; background: linear-gradient(180deg, rgba(17,17,17,0.98), rgba(12,12,12,0.98)); border-top:1px solid rgba(255,255,255,0.03); }\
#mobile-collapsible-nav-inject .collapsible-menu.open { opacity:1; max-height:1000px; }\
#mobile-collapsible-nav-inject .collapsible-list { list-style:none; margin:0; padding:12px 10px 16px 10px; display:flex; flex-direction:column; gap:8px; }\
#mobile-collapsible-nav-inject .collapsible-list a { display:block; padding:12px 14px; border-radius:8px; text-decoration:none; color:#fff; font-weight:700; background: linear-gradient(90deg, rgba(255,102,0,0.02), transparent); }\
#mobile-collapsible-nav-inject .collapsible-list a:hover, #mobile-collapsible-nav-inject .collapsible-list a:focus { background: rgba(255,102,0,0.08); color:#ffd8bf; outline:none; }\
@media(min-width:768px){ #mobile-collapsible-nav-inject{display:none!important;} }\
';
      var styleTag = document.createElement('style');
      styleTag.setAttribute('data-injected','mobile-collapsible-nav');
      styleTag.appendChild(document.createTextNode(css));
      document.head.appendChild(styleTag);
    }

    // wire up behaviour
    var btn = document.getElementById('hamburger-inject');
    var menu = document.getElementById('site-collapsible-menu');

    if (!btn || !menu) return;

    function openMenu(){
      btn.classList.add('open');
      btn.setAttribute('aria-expanded','true');
      menu.classList.add('open');
      menu.setAttribute('aria-hidden','false');
      // set exact height for smooth animation
      menu.style.maxHeight = menu.scrollHeight + 'px';
      // move focus to first link for accessibility
      var first = menu.querySelector('a');
      if (first) first.focus();
    }

    function closeMenu(){
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
      menu.setAttribute('aria-hidden','true');
      menu.style.maxHeight = 0;
      setTimeout(function(){ menu.classList.remove('open'); }, 420);
      btn.focus();
    }

    btn.addEventListener('click', function(e){
      e.stopPropagation();
      if (btn.classList.contains('open')) closeMenu(); else openMenu();
    });

    menu.addEventListener('click', function(e){
      var t = e.target;
      if (t && t.tagName === 'A') {
        // close and allow navigation
        closeMenu();
      }
    });

    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && btn.classList.contains('open')) closeMenu();
    });

    // optional: close on scroll to avoid sticky-open state
    var lastScroll = window.scrollY;
    window.addEventListener('scroll', function(){
      var current = window.scrollY;
      if (Math.abs(current - lastScroll) > 80 && btn.classList.contains('open')) closeMenu();
      lastScroll = current;
    });

    // responsive safety: if user resizes to desktop, auto-close and hide
    window.addEventListener('resize', function(){
      if (window.innerWidth >= 768 && btn.classList.contains('open')) closeMenu();
    });

  }); // ready
})(); // injector IIFE
