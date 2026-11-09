/* C-PhishTrapper · Landing v2 */

/* ---------- Botón "volver arriba" ---------- */
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  const visible = window.scrollY > 400;
  backToTopBtn.classList.toggle('opacity-0', !visible);
  backToTopBtn.classList.toggle('pointer-events-none', !visible);
  backToTopBtn.classList.toggle('opacity-100', visible);
  backToTopBtn.classList.toggle('pointer-events-auto', visible);
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ---------- Precios: mensual / anual ---------- */
const billingToggle = document.getElementById('billing-toggle');
const toggleDot = document.getElementById('billing-toggle-dot');
const labelMonthly = document.getElementById('label-monthly');
const labelAnnual = document.getElementById('label-annual');
const priceElements = document.querySelectorAll('.plan-price');
const periodElements = document.querySelectorAll('.plan-period');
let isAnnual = false;

function setLabelActive(label, active) {
  label.classList.toggle('font-bold', active);
  label.classList.toggle('text-primary', active);
  label.classList.toggle('text-on-surface-variant', !active);
}

billingToggle.addEventListener('click', () => {
  isAnnual = !isAnnual;
  billingToggle.setAttribute('aria-checked', String(isAnnual));

  toggleDot.classList.toggle('translate-x-7', isAnnual);
  toggleDot.classList.toggle('translate-x-0', !isAnnual);
  billingToggle.classList.toggle('bg-primary', isAnnual);
  billingToggle.classList.toggle('bg-surface-variant', !isAnnual);

  setLabelActive(labelAnnual, isAnnual);
  setLabelActive(labelMonthly, !isAnnual);

  priceElements.forEach((el) => {
    el.textContent = isAnnual ? el.dataset.annual : el.dataset.monthly;
  });
  periodElements.forEach((el) => {
    el.textContent = isAnnual ? '/mes facturado anual' : '/mes';
  });
});

/* ---------- FAQ (acordeón) ---------- */
const faqButtons = document.querySelectorAll('.faq-btn');

faqButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const wasOpen = !content.classList.contains('hidden');

    // Cierra todos
    faqButtons.forEach((other) => {
      other.nextElementSibling.classList.add('hidden');
      other.querySelector('.faq-icon').classList.remove('rotate-180');
      other.setAttribute('aria-expanded', 'false');
    });

    // Abre el seleccionado si estaba cerrado
    if (!wasOpen) {
      content.classList.remove('hidden');
      btn.querySelector('.faq-icon').classList.add('rotate-180');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ---------- Modal de instalación / suscripción ---------- */
const modal = document.getElementById('action-modal');
const modalCard = document.getElementById('modal-card');
const modalTitle = document.getElementById('modal-title');
const modalPlanBadge = document.getElementById('modal-plan-badge');
const modalFormView = document.getElementById('modal-form-view');
const modalSuccessView = document.getElementById('modal-success-view');
const modalForm = document.getElementById('modal-quick-form');

function openModal(planName) {
  if (planName) {
    modalPlanBadge.textContent = planName.toUpperCase();
    modalTitle.textContent = 'Activar ' + planName;
  }
  modalFormView.classList.remove('hidden');
  modalSuccessView.classList.add('hidden');
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  modalCard.classList.replace('scale-95', 'scale-100');
}

function closeModal() {
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  modalCard.classList.replace('scale-100', 'scale-95');
}

document.querySelectorAll('.open-modal-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    openModal(btn.dataset.plan || 'Prueba Gratuita');
  });
});

document.getElementById('close-modal-btn').addEventListener('click', closeModal);
document.getElementById('modal-finish-btn').addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});

modalForm.addEventListener('submit', (event) => {
  event.preventDefault();
  modalFormView.classList.add('hidden');
  modalSuccessView.classList.remove('hidden');
});

/* ---------- Formulario de contacto ---------- */
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const submitBtn = document.getElementById('contact-submit-btn');
  submitBtn.disabled = true;
  submitBtn.classList.add('opacity-70');
  document.getElementById('contact-feedback').classList.remove('hidden');
});
