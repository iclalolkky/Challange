
export interface ButtonProps {
  text: string;
  variant?: 'primary' | 'outline'; 
  disabled?: boolean;
  onClick?: (e: MouseEvent) => void;
}

export function createButton({ text, variant = 'primary', disabled = false, onClick }: ButtonProps): HTMLButtonElement {
  // HTML elementi
  const button = document.createElement('button');
  
  button.textContent = text;
  
  // BEM 
  button.classList.add('btn');
  
  // BEM modifier sınıfını 
  button.classList.add(`btn--${variant}`);
  
  if (disabled) {
    button.disabled = true;
  }
  
  if (onClick) {
    button.addEventListener('click', onClick);
  }
  
  return button;
}