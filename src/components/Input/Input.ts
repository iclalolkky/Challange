export interface InputProps {
  label: string;
  id: string; 
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  required?: boolean;
}

export function createInput({ label, id, type = 'text', placeholder = '', required = false }: InputProps): HTMLDivElement {
 
  const wrapper = document.createElement('div');
  wrapper.classList.add('input-group');

  const labelEl = document.createElement('label');
  labelEl.classList.add('input-group__label');
  labelEl.setAttribute('for', id);
  labelEl.textContent = label;

  const inputEl = document.createElement('input');
  inputEl.classList.add('input-group__field');
  inputEl.id = id;
  inputEl.type = type;
  inputEl.placeholder = placeholder;
  if (required) {
    inputEl.required = true;
    inputEl.setAttribute('aria-required', 'true');
  }

  wrapper.appendChild(labelEl);
  wrapper.appendChild(inputEl);

  return wrapper;
}