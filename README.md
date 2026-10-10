document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const planOptions = document.querySelectorAll('.plan-option');
  const cards = document.querySelectorAll('.price-card');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((item) => item.classList.toggle('active', item === tab));
    });
  });

  planOptions.forEach((button) => {
    button.addEventListener('click', () => {
      planOptions.forEach((item) => item.classList.toggle('active', item === button));

      const selected = button.textContent.trim();
      cards.forEach((card) => {
        const planName = card.querySelector('h3')?.textContent?.trim() || '';
        card.classList.toggle('active-card', planName === selected || selected === '1 Giga' && planName === '1 Giga');
      });
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
} );

const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('input', (event) => {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length <= 2) {
      value = value;
    } else if (value.length <= 7) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
    }
    event.target.value = value.slice(0, 15);
  });
}

const cepInput = document.getElementById('cep');
if (cepInput) {
  cepInput.addEventListener('input', (event) => {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 5) {
      value = `${value.slice(0, 5)}-${value.slice(5, 8)}`;
    }
    event.target.value = value.slice(0, 9);
  });
}

console.log('Velozes Internet site carregado com sucesso!');
