import './offerList.scss';
import { $el } from '../../../../../services/services';
import { offers } from '../../../../../schemas/specialOfferSchema';

export const OfferList = (elem = null) => {
  const container = $el('ul', { className: 'offerList' });

  container.append(
    ...offers.map(list => {
      const { info, price, img } = list;
      const offerItem = $el('li', { className: 'offerList_list' });

      offerItem.append(
        $el('img', { src: img }),
        $el('p', {
          className: 'offerList_list__info',
          innerText: info,
        }),
        $el('p', {
          className: 'offerList_list__price',
          innerText: price,
        }),
        $el('button', { innerText: 'Купить' })
      );

      return offerItem;
    })
  );

  elem.append(container);
};
