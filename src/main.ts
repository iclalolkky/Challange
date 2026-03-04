import './styles/main.scss';
import { createButton } from './components/Button/Button';

// HTML #app div
const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  // 1. Primary Buton 
  const primaryBtn = createButton({
    text: 'Hemen Başla',
    variant: 'primary',
    onClick: () => alert('Primary butona tıklandı!')
  });

  // 2. Outline Buton 
  const outlineBtn = createButton({
    text: 'Daha Fazla Bilgi',
    variant: 'outline',
  });

  app.appendChild(primaryBtn);
  app.appendChild(outlineBtn);
}