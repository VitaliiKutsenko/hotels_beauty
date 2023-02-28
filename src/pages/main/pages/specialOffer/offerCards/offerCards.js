import './offerCards.scss';
import { $el } from '../../../../../services/services';
import { offerCardsSchema } from '../../../../../schemas/specialOfferSchema';

const func = type => {
  switch (type) {
    case 'email':
      return $el('input', {
        type: 'mail',
        placeholder: 'Введите e-mail',
      });

    case 'map':
      return $el('button', { innerText: 'Карта магазинов' });
  }
};

export const OfferCards = (elem = null) => {
  const container = $el('ul', { className: 'offerCards' });

  container.append(
    ...offerCardsSchema.map(card => {
      const { type, img, info, title } = card;
      const cardWrapper = $el('li', { className: 'offerCards_list' });
      const section = $el('section', { className: 'offerCards_section' });

      section.append(
        $el('h4', {
          className: 'offerCards_section__title',
          innerText: title,
        }),
        $el('p', {
          className: 'offerCards_section__info',
          innerText: info,
        }),
        func(type)
      );

      const pic = img
        ? $el('img', {
            src: img,
            alt: type,
          })
        : '';

      cardWrapper.append(section, pic);

      return cardWrapper;
    })
  );

  elem.append(container);
};
