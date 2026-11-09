/* C-PhishTrapper · Landing v3 */

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

/* ---------- Precios: anual / mensual ---------- */
const billingToggle = document.getElementById('billing-toggle');
const toggleDot = document.getElementById('billing-toggle-dot');
const labelMonthly = document.getElementById('label-monthly');
const labelAnnual = document.getElementById('label-annual');
const prices = document.querySelectorAll('.plan-price');
let isAnnual = true; // La página arranca mostrando el pago anual

function setLabelActive(label, active) {
  label.classList.toggle('font-bold', active);
  label.classList.toggle('text-primary', active);
  label.classList.toggle('text-on-surface-variant', !active);
}

function renderBilling() {
  billingToggle.setAttribute('aria-checked', String(isAnnual));
  toggleDot.classList.toggle('translate-x-7', isAnnual);
  toggleDot.classList.toggle('translate-x-0', !isAnnual);
  billingToggle.classList.toggle('bg-primary', isAnnual);
  billingToggle.classList.toggle('bg-surface-variant', !isAnnual);

  setLabelActive(labelAnnual, isAnnual);
  setLabelActive(labelMonthly, !isAnnual);

  prices.forEach((price) => {
    price.textContent = isAnnual ? price.dataset.anual : price.dataset.mensual;
  });
}

billingToggle.addEventListener('click', () => {
  isAnnual = !isAnnual;
  renderBilling();
});

renderBilling();

/* ---------- Formulario de piloto ---------- */
const leadForm = document.getElementById('lead-form');
const okMessage = document.getElementById('ok');

leadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const submitBtn = leadForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.classList.add('opacity-70');
  okMessage.classList.remove('hidden');
});
