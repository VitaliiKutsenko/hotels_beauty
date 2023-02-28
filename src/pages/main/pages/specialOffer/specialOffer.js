import './specialOffer.scss';
import { $el } from '../../../../services/services';
import { OfferList } from './offersLists/offerList';
import car from '../../../../../public/pics/offers/Vector.svg';
import { OfferCards } from './offerCards/offerCards';

const SpecialOfferHeader = elem => {
  const container = $el('article', { className: 'specialOffer_header' });

  container.append($el('h2', { innerText: 'Специальные предложения' }), $el('img', { src: car }));

  elem.append(container);
};

export const SpecialOffer = (elem = null) => {
  const container = $el('section', { className: 'specialOffer' });

  SpecialOfferHeader(container);
  OfferList(container);
  OfferCards(container);
  elem.append(container);
};
