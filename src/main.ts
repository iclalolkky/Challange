import './styles/main.scss';
import { createButton } from './components/Button/Button';
import { createInput } from './components/Input/Input';
import { createCard } from './components/Card/Card';
import { createModal } from './components/Modal/Modal';
import { createAccordion } from './components/Accordion/Accordion';

// HTML #app div
const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  // Primary Buton 
  const primaryBtn = createButton({
    text: 'Hemen Başla',
    variant: 'primary',
    onClick: () => {
      const modalContent = document.createElement('p');
      modalContent.textContent = "Harika! Gelişmeye devam ediyoruz. Kayıt formu yakında burada olacak.";

      const modal = createModal({ title: 'Hoş Geldiniz!', content: modalContent });
      document.body.appendChild(modal);
    }
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

  const featureCard = createCard({
    title: 'Modern Altyapı',
    description: 'Vite ve TypeScript ile yüksek performanslı yazılımlar.',
  });

  const faqItems = [
    {
      title: 'Vite ve TypeScript neden hızlı?',
      content: 'Vite, geliştirme sunucusunu saniyeler içinde başlatır. TypeScript ise kod yazarken hataları yakalar ve güvenli bir yapı sunar.'
    },
    {
      title: 'Bileşen kütüphanesi nasıl çalışıyor?',
      content: 'Vanilla TS ve SCSS kullanılarak, BEM metodolojisine tasarlandı.'
    }
  ];

  const accordion = createAccordion(faqItems);

  app.appendChild(primaryBtn);
  app.appendChild(outlineBtn);
  app.appendChild(emailInput);
  app.appendChild(featureCard);
  app.appendChild(accordion);
}