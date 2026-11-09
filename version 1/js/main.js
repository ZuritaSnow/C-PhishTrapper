/* C-PhishTrapper · Landing v1 */

// Cambio de precios anual / mensual
const periodButtons = document.querySelectorAll('.toggle button');
const prices = document.querySelectorAll('.price span[data-anual]');

periodButtons.forEach((button) => {
  button.addEventListener('click', () => {
    periodButtons.forEach((b) => {
      b.classList.remove('on');
      b.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('on');
    button.setAttribute('aria-pressed', 'true');

    const period = button.dataset.period;
    prices.forEach((price) => {
      price.textContent = price.dataset[period];
    });
  });
});

// Formulario de demostración
const leadForm = document.getElementById('lead-form');
const okMessage = document.getElementById('ok');

leadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  okMessage.hidden = false;
});
