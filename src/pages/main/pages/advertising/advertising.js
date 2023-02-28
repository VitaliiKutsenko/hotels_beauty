import './advertising.scss';
import { $el } from '../../../../services/services';
import banner from './../../../../../public/pics/advertising/Rectangle 2.png';
import { advertisingSchema } from '../../../../schemas/advertisingSchema';

const Banner = elem => {
  const bannerWrapper = $el('div', { className: 'advertising_banner' });

  bannerWrapper.append($el('img', { src: banner }));

  elem.append(bannerWrapper);
};

const Info = elem => {
  const container = $el('article', { className: 'advertising_info' });

  const { title, info } = advertisingSchema;

  container.append(
    $el('h3', { innerText: title }),
    $el('p', { innerText: info }),
    $el('button', { innerText: 'Подробнее' })
  );

  elem.append(container);
};

export const Advertising = (elem = null) => {
  const main = $el('section', { className: 'advertising' });

  Banner(main);
  Info(main);
  elem.append(main);
};
