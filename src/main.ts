import './styles/main.scss';
import { createButton } from './components/Button/Button';
import { createModal } from './components/Modal/Modal';
import { createCard } from './components/Card/Card';
import { createAccordion } from './components/Accordion/Accordion';
import { createInput } from './components/Input/Input';

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
  title.textContent = 'Modern, Hızlı ve Ölçeklenebilir Arayüzler';

  const desc = document.createElement('p');
  desc.classList.add('hero__description');
  desc.textContent = 'Sıfır bağımlılık ilkesiyle, Vanilla TypeScript ve modern SCSS mimarisi kullanılarak geliştirilmiş performans odaklı bileşen kütüphanesi. Projelerinize hız ve güvenilirlik katın.';

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

const featuresSection = document.querySelector<HTMLElement>('#features');

if (featuresSection) {
  const container = document.createElement('div');
  container.classList.add('container', 'features__container');

  const sectionTitle = document.createElement('h2');
  sectionTitle.classList.add('features__title');
  sectionTitle.textContent = 'Neden Bizi Seçmelisiniz?';

  const grid = document.createElement('div');
  grid.classList.add('features__grid');

  const featuresData = [
    { title: 'Modüler Mimari', description: 'BEM metodolojisi ile tamamen izole, bağımsız ve projenizin her yerinde tekrar kullanılabilir bileşenler.' },
    { title: 'Dinamik Tema', description: 'Gelişmiş CSS değişkenleri sayesinde tek tıkla ve saniye gecikmesi olmadan aydınlık/karanlık mod geçişi.' },
    { title: 'Tam Erişilebilirlik', description: 'Ekran okuyucular ve klavye navigasyonu için ARIA standartlarıyla %100 uyumlu kapsayıcı tasarım.' },
    { title: 'Maksimum Tip Güvenliği', description: 'TypeScript\'in gücüyle hatasız, öngörülebilir ve derleme aşamasında korunan güvenilir kod altyapısı.' },
    { title: 'Mobil Öncelikli (Responsive)', description: 'Özelleştirilebilir SCSS mixin\'leri ile akıllı telefonlardan dev ekranlara kadar her cihazda kusursuz görünüm.' },
    { title: 'Sıfır Bağımlılık (Zero-Dependency)', description: 'Dış kütüphanelerin getirdiği yük ve güvenlik açıklarından uzak, sadece saf ve yüksek performanslı web teknolojileri.' }
  ];

  featuresData.forEach(feature => {
    const card = createCard({ title: feature.title, description: feature.description });
    grid.appendChild(card);
  });

  container.appendChild(sectionTitle);
  container.appendChild(grid);
  featuresSection.appendChild(container);
}

const faqSectionEl = document.querySelector<HTMLElement>('#faq');

if (faqSectionEl) {
  const container = document.createElement('div');
  container.classList.add('container', 'faq-section__container');

  const sectionTitle = document.createElement('h2');
  sectionTitle.classList.add('faq-section__title');
  sectionTitle.textContent = 'Sıkça Sorulan Sorular';

  const faqData = [
    {
      title: 'Bu platform ücretsiz mi?',
      content: 'Evet, kullanılan tüm teknolojiler (Vite, TypeScript, SCSS) tamamen açık kaynaklı ve ücretsizdir.'
    },
    {
      title: 'Hangi framework kullanıldı?',
      content: 'Hiçbir framework kullanılmadı. Bu proje tamamen sıfır bağımlılık prensibine uygundur.'
    },
    {
      title: 'Karanlık tema nasıl çalışıyor?',
      content: 'CSS değişkenleri ve HTML root etiketindeki data-theme kullanılarak geçiş sağlanıyor.'
    }
  ];

  const accordion = createAccordion(faqData);

  container.appendChild(sectionTitle);
  container.appendChild(accordion);
  faqSectionEl.appendChild(container);
}

const footerSectionEl = document.querySelector<HTMLElement>('#footer');

if (footerSectionEl) {
  const container = document.createElement('div');
  container.classList.add('container', 'footer__container');

  const infoDiv = document.createElement('div');
  infoDiv.classList.add('footer__info');
  
  const logo = document.createElement('div');
  logo.classList.add('footer__logo');
  logo.textContent = 'UI.Challenge';

  const copyright = document.createElement('p');
  copyright.classList.add('footer__copyright');
  copyright.textContent = '© 2026 Tüm hakları saklıdır. İclal Olukkaya.';

  infoDiv.appendChild(logo);
  infoDiv.appendChild(copyright);

  const newsletterDiv = document.createElement('div');
  newsletterDiv.classList.add('footer__newsletter');

  const newsletterTitle = document.createElement('h3');
  newsletterTitle.textContent = 'Bültene Abone Olun';

  const formDiv = document.createElement('div');
  formDiv.classList.add('footer__newsletter-form');

  const emailInput = createInput({
    label: '', 
    id: 'newsletter-email',
    type: 'email',
    placeholder: 'ornek@sirket.com',
    required: true
  });

  const submitBtn = createButton({
    text: 'Abone Ol',
    variant: 'primary',
    onClick: () => {
      const inputEl = emailInput.querySelector('input');
      if (inputEl && inputEl.value.includes('@') && inputEl.value.includes('.')) {
        alert(`Teşekkürler! ${inputEl.value} adresi bültene başarıyla kaydedildi.`);
        inputEl.value = ''; 
      } else {
        alert('Lütfen geçerli bir e-posta adresi giriniz.');
      }
    }
  });

  formDiv.appendChild(emailInput);
  formDiv.appendChild(submitBtn);

  newsletterDiv.appendChild(newsletterTitle);
  newsletterDiv.appendChild(formDiv);

  container.appendChild(infoDiv);
  container.appendChild(newsletterDiv);
  footerSectionEl.appendChild(container);
}