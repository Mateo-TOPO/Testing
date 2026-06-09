/* LAIMS OEM Partner – Client-Interaktivität */
(function () {
  'use strict';

  /* ---- Mobile-Menü ---- */
  window.toggleOemMenu = function () {
    var m = document.getElementById('oem-mobile-menu');
    if (m) m.classList.toggle('hidden');
  };

  document.addEventListener('DOMContentLoaded', function () {
    /* ---- Nav: Hintergrund beim Scrollen ---- */
    var nav = document.getElementById('oem-nav');
    function onScroll() {
      if (!nav) return;
      if (window.scrollY > 24) {
        nav.classList.add('bg-navy-950/90', 'backdrop-blur-md', 'shadow-lg', 'shadow-black/20', 'border-b', 'border-white/10');
      } else {
        nav.classList.remove('bg-navy-950/90', 'backdrop-blur-md', 'shadow-lg', 'shadow-black/20', 'border-b', 'border-white/10');
      }
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ---- Mobile-Menü bei Link-Klick schließen ---- */
    var mm = document.getElementById('oem-mobile-menu');
    if (mm) {
      mm.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { mm.classList.add('hidden'); });
      });
    }

    /* ---- Scroll-Reveal ---- */
    var reveals = document.querySelectorAll('.reveal:not(.in)');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add('in'); });
    }

    /* ---- FAQ-Akkordeon ---- */
    document.querySelectorAll('.oem-faq-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var panel = btn.parentElement.querySelector('.oem-faq-panel');
        var icon = btn.querySelector('i');
        var open = panel && !panel.classList.contains('hidden');
        // andere schließen
        document.querySelectorAll('.oem-faq-panel').forEach(function (p) { p.classList.add('hidden'); });
        document.querySelectorAll('.oem-faq-btn i').forEach(function (i) { i.style.transform = ''; });
        if (panel && !open) {
          panel.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    });

    /* ---- Smooth-Scroll mit Nav-Offset ---- */
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (ev) {
        var id = a.getAttribute('href');
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (!target) return;
        ev.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });

    /* ---- Kontaktformular ---- */
    var form = document.getElementById('oem-form');
    if (form) {
      var formStartedAt = Date.now();
      var msg = document.getElementById('oem-form-msg');
      var label = form.querySelector('.oem-form-label');

      function showMsg(text, ok) {
        if (!msg) return;
        msg.textContent = text;
        msg.classList.remove('hidden', 'text-green-600', 'text-red-500');
        msg.classList.add(ok ? 'text-green-600' : 'text-red-500');
      }

      form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        var data = {
          company: form.company.value.trim(),
          name: form.name.value.trim(),
          email: form.email.value.trim(),
          phone: form.phone.value.trim(),
          message: form.message.value.trim(),
          website: form.website.value,
          formStartedAt: formStartedAt,
          source: 'oempartner'
        };
        if (!data.company || !data.name || !data.email) {
          showMsg('Bitte füllen Sie Firma, Name und E-Mail aus.', false);
          return;
        }
        if (label) label.textContent = 'Wird gesendet …';

        fetch('/api/enterprise/inquiry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }).then(function (r) {
          return r.json().then(function (j) { return { ok: r.ok, j: j }; });
        }).then(function (res) {
          if (res.ok && res.j && res.j.success) {
            form.reset();
            showMsg('Vielen Dank! Wir melden uns in Kürze bei Ihnen.', true);
            if (label) label.textContent = 'Gesendet ✓';
          } else {
            showMsg((res.j && res.j.error) || 'Senden fehlgeschlagen. Bitte später erneut versuchen.', false);
            if (label) label.textContent = 'Anfrage senden';
          }
        }).catch(function () {
          showMsg('Netzwerkfehler. Bitte später erneut versuchen.', false);
          if (label) label.textContent = 'Anfrage senden';
        });
      });
    }
  });
})();
