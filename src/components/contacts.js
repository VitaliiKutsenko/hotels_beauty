import { $el } from '../services/services';
import './contacts.scss';

export const Contacts = elem => {
  const phoneWrapper = $el('div', { className: 'contacts__wrapper' });

  phoneWrapper.append(
    $el('a', {
      href: `tel:8 (812) 123-45-67`,
      innerText: '8 (812) 123-45-67',
    }),
    $el('button', { innerText: 'Обратный звонок' })
  );

  if (elem) {
    elem.append(phoneWrapper);
  }

  return phoneWrapper;
};
