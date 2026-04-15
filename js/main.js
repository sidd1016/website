// ===== Mobile Menu Toggle =====
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      const spans = menuToggle.querySelectorAll('span');
      if (navLinks.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }

  // ===== Scroll Animations =====
  const fadeElements = document.querySelectorAll('.fade-in');

  function checkFade() {
    fadeElements.forEach(function (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkFade);
  checkFade();

  // ===== Contact Form Handling =====
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(contactForm);

      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            formSuccess.classList.add('show');
            contactForm.reset();
            setTimeout(function () {
              formSuccess.classList.remove('show');
            }, 5000);
          }
        })
        .catch(function () {
          alert('There was an error sending your message. Please try again.');
        });
    });
  }

  // ===== Active Navigation Link =====
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // ===== WhatsApp Floating Button =====
  // CHANGE: Replace 919876543210 with your real WhatsApp number (country code + number, no spaces/dashes)
  var whatsappNumber = '919642403230';
  var whatsappMessage = encodeURIComponent('Hi, I am interested in your industrial safety services. Please share more details.');

  var whatsappBtn = document.createElement('a');
  whatsappBtn.href = 'https://wa.me/' + whatsappNumber + '?text=' + whatsappMessage;
  whatsappBtn.target = '_blank';
  whatsappBtn.rel = 'noopener noreferrer';
  whatsappBtn.className = 'whatsapp-float';
  whatsappBtn.setAttribute('aria-label', 'Chat on WhatsApp');
  whatsappBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#fff" width="28" height="28"><path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.742 3.052 9.38L1.056 31.2l6.012-1.932A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.598c-.39 1.1-1.932 2.014-3.148 2.28-.832.178-1.918.32-5.574-1.198-4.678-1.94-7.692-6.694-7.926-7.004-.226-.31-1.846-2.462-1.846-4.694 0-2.232 1.168-3.33 1.584-3.786.39-.426.912-.574 1.184-.574.15 0 .286.008.408.014.416.018.624.042.898.698.342.816 1.178 2.874 1.28 3.084.104.21.198.486.06.776-.126.296-.21.48-.416.74-.21.258-.44.576-.628.774-.21.218-.428.456-.184.894.244.432 1.086 1.792 2.332 2.904 1.602 1.43 2.95 1.874 3.368 2.082.416.21.66.176.902-.106.25-.29 1.06-1.232 1.342-1.656.276-.424.556-.354.936-.212.384.138 2.436 1.15 2.852 1.36.416.21.694.316.796.488.104.172.104.994-.286 2.094z"/></svg>';

  var tooltip = document.createElement('span');
  tooltip.className = 'whatsapp-tooltip';
  tooltip.textContent = 'Chat with us';
  whatsappBtn.appendChild(tooltip);

  document.body.appendChild(whatsappBtn);
});
