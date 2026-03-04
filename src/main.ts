import './styles/main.scss';
import { createButton } from './components/Button/Button';
import { createInput } from './components/Input/Input';

// HTML #app div
const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  // Primary Buton 
  const primaryBtn = createButton({
    text: 'Hemen Başla',
    variant: 'primary',
    onClick: () => alert('Primary butona tıklandı!')
  });

  // Outline Buton 
  const outlineBtn = createButton({
    text: 'Daha Fazla Bilgi',
    variant: 'outline',
  });

  const emailInput = createInput({
    label: 'E-posta Adresiniz',
    id: 'email-input',
    type: 'email',
    placeholder: 'ornek@sirket.com',
    required: true
  });

  app.appendChild(primaryBtn);
  app.appendChild(outlineBtn);
  app.appendChild(emailInput);
}