import { $el } from '../../services/services';
import './footer.scss';

export const Footer = (elem = null) => {
  const footer = $el('footer', { className: 'footer' });

  footer.append(
    $el('p', {
      textContent:
        'Лучший магазин (с) 2019 Все права защищены. Интернет-магазин оборудования для салонов красоты',
    }),
    $el('p', { textContent: 'Политика конфиденциальности' })
  );

  elem.append(footer);
};
