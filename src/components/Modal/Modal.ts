export interface ModalProps {
  title: string;
  content: HTMLElement;
}

export function createModal({ title, content }: ModalProps): HTMLDivElement {
  // Overlay
  const overlay = document.createElement('div');
  overlay.classList.add('modal-overlay');

  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');

  const header = document.createElement('div');
  header.classList.add('modal__header');

  const titleEl = document.createElement('h2');
  titleEl.classList.add('modal__title');
  titleEl.textContent = title;

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('modal__close');
  closeBtn.innerHTML = '&times;'; 
  closeBtn.setAttribute('aria-label', 'Kapat');
  
  const closeModal = () => {
    overlay.classList.add('modal-overlay--closing');
    setTimeout(() => overlay.remove(), 300); 
  };
  
  closeBtn.onclick = closeModal;
  
  overlay.onclick = (e) => {
    if (e.target === overlay) closeModal();
  };

  const body = document.createElement('div');
  body.classList.add('modal__body');
  body.appendChild(content);

  header.appendChild(titleEl);
  header.appendChild(closeBtn);
  modal.appendChild(header);
  modal.appendChild(body);
  overlay.appendChild(modal);

  return overlay;
}