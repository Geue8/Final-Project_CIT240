document.addEventListener('DOMContentLoaded', () => {
  // Photo Lightbox Modal (tour.html)
  const photoModal = document.getElementById('photoModal');
  if (photoModal) {
    photoModal.addEventListener('show.bs.modal', (event) => {
      const trigger = event.relatedTarget;
      if (!trigger) return;

      const src = trigger.getAttribute('data-photo-src') || '';
      const title = trigger.getAttribute('data-photo-title') || 'Academic Experience Photo';
      const desc = trigger.getAttribute('data-photo-desc') || '';

      const modalImg = document.getElementById('modalPhotoImg');
      const modalTitle = document.getElementById('modalPhotoTitle');
      const modalDesc = document.getElementById('modalPhotoDesc');

      if (modalImg) modalImg.src = src;
      if (modalTitle) modalTitle.textContent = title;
      if (modalDesc) modalDesc.textContent = desc;
    });
  }

  // Tour Filter Buttons (tour.html)
  const tourFilterButtons = document.querySelectorAll('[data-tour-filter]');
  const tourItems = document.querySelectorAll('#tourGrid [data-tour-category]');

  tourFilterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-tour-filter');

      tourFilterButtons.forEach((b) => {
        b.classList.remove('btn-primary-custom');
        b.classList.add('btn-outline-custom');
      });
      btn.classList.remove('btn-outline-custom');
      btn.classList.add('btn-primary-custom');

      tourItems.forEach((item) => {
        const categories = (item.getAttribute('data-tour-category') || '').split(/\s+/);
        if (filter === 'all' || categories.includes(filter)) {
          item.classList.remove('d-none');
        } else {
          item.classList.add('d-none');
        }
      });
    });
  });

  // Project Filter Buttons (projects.html)
  const projectFilterButtons = document.querySelectorAll('[data-project-filter]');
  const projectCards = document.querySelectorAll('#projectsGrid [data-project-category]');

  projectFilterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-project-filter');

      projectFilterButtons.forEach((b) => {
        b.classList.remove('btn-primary-custom');
        b.classList.add('btn-outline-custom');
      });
      btn.classList.remove('btn-outline-custom');
      btn.classList.add('btn-primary-custom');

      projectCards.forEach((card) => {
        const col = card.closest('[class*="col-"]') || card;
        const categories = (card.getAttribute('data-project-category') || '').split(/\s+/);
        if (filter === 'all' || categories.includes(filter)) {
          col.classList.remove('d-none');
        } else {
          col.classList.add('d-none');
        }
      });
    });
  });

  // Contact Form Validation (contact.html)
  const contactForm = document.getElementById('contactForm');
  const formAlertContainer = document.getElementById('formAlertContainer');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
        return;
      }

      if (formAlertContainer) {
        formAlertContainer.innerHTML =
          '<div class="alert alert-success alert-dismissible fade show small" role="alert">' +
          '<i class="bi bi-check-circle-fill me-2"></i>Thank you for your message! Your inquiry has been recorded.' +
          '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
          '</div>';
      }
      contactForm.reset();
      contactForm.classList.remove('was-validated');
    });
  }

  // Back to Top Button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
