import './styles/main.scss';
import { createButton } from './components/Button/Button';
import { createModal } from './components/Modal/Modal';

const headerSection = document.querySelector<HTMLElement>('#header');

if (headerSection) {
  const container = document.createElement('div');
  container.classList.add('container', 'header');

  const logo = document.createElement('div');
  logo.classList.add('header__logo');
  logo.textContent = 'UI.Challenge';

  const themeBtn = createButton({
    text: '🌙 Dark Mode',
    variant: 'outline',
    onClick: (e) => {
      const html = document.documentElement;
      const isDark = html.getAttribute('data-theme') === 'dark';
      
      html.setAttribute('data-theme', isDark ? 'light' : 'dark');
      
      const target = e.currentTarget as HTMLButtonElement;
      target.textContent = isDark ? '🌙 Dark Mode' : '☀️ Light Mode';
    }
  });

  container.appendChild(logo);
  container.appendChild(themeBtn);
  headerSection.appendChild(container);
}
const heroSection = document.querySelector<HTMLElement>('#hero');

if (heroSection) {
  const container = document.createElement('div');
  container.classList.add('container', 'hero');

  const title = document.createElement('h1');
  title.classList.add('hero__title');
  title.textContent = 'Geleceğin Arayüzleri';

  const desc = document.createElement('p');
  desc.classList.add('hero__description');
  desc.textContent = 'Vite, Vanilla TypeScript ve SCSS kullanarak web uygulamaları geliştirin.';

  const actions = document.createElement('div');
  actions.classList.add('hero__actions');

  const ctaBtn = createButton({
    text: 'Hemen Başla',
    variant: 'primary',
    onClick: () => {
      const modalContent = document.createElement('p');
      modalContent.textContent = "Kayıt formu ve detaylar çok yakında eklenecek!";
      const modal = createModal({ title: 'Aramıza Katıl', content: modalContent });
      document.body.appendChild(modal);
    }
  });

  const githubBtn = createButton({
    text: 'GitHub\'da İncele',
    variant: 'outline',
    onClick: () => window.open('https://github.com/iclalolkky/Challange', '_blank')
  });

  actions.appendChild(ctaBtn);
  actions.appendChild(githubBtn);

  container.appendChild(title);
  container.appendChild(desc);
  container.appendChild(actions);
  heroSection.appendChild(container);
}