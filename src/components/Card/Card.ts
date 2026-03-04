export interface CardProps {
  title: string;
  description: string;
  image?: string;
}

export function createCard({ title, description, image }: CardProps): HTMLDivElement {
  const card = document.createElement('div');
  card.classList.add('card');

  if (image) {
    const img = document.createElement('img');
    img.src = image;
    img.classList.add('card__image');
    card.appendChild(img);
  }

  const content = document.createElement('div');
  content.classList.add('card__content');

  const titleEl = document.createElement('h3');
  titleEl.classList.add('card__title');
  titleEl.textContent = title;

  const descEl = document.createElement('p');
  descEl.classList.add('card__description');
  descEl.textContent = description;

  content.appendChild(titleEl);
  content.appendChild(descEl);
  card.appendChild(content);

  return card;
}