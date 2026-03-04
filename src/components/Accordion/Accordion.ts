export interface AccordionItem {
  title: string;
  content: string;
}

export function createAccordion(items: AccordionItem[]): HTMLDivElement {
  const container = document.createElement('div');
  container.classList.add('accordion');

  items.forEach((item, index) => {
   
    const section = document.createElement('div');
    section.classList.add('accordion__item');

    const header = document.createElement('button');
    header.classList.add('accordion__header');
    header.setAttribute('aria-expanded', 'false');
    header.setAttribute('aria-controls', `accordion-content-${index}`);
    
    header.innerHTML = `
      <span class="accordion__title">${item.title}</span>
      <span class="accordion__icon">+</span>
    `;

    const contentWrapper = document.createElement('div');
    contentWrapper.id = `accordion-content-${index}`;
    contentWrapper.classList.add('accordion__content');
    
    const contentText = document.createElement('p');
    contentText.textContent = item.content;
    contentWrapper.appendChild(contentText);

    header.addEventListener('click', () => {
      const isOpen = section.classList.contains('accordion__item--open');

      if (isOpen) {
        section.classList.remove('accordion__item--open');
        header.setAttribute('aria-expanded', 'false');
        header.querySelector('.accordion__icon')!.textContent = '+';
      } else {
        section.classList.add('accordion__item--open');
        header.setAttribute('aria-expanded', 'true');
        header.querySelector('.accordion__icon')!.textContent = '−';
      }
    });

    section.appendChild(header);
    section.appendChild(contentWrapper);
    container.appendChild(section);
  });

  return container;
}