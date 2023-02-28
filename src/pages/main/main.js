import { $el } from '../../services/services';
import './main.scss';
import { Advertising } from './pages/advertising/advertising';
import { SpecialOffer } from './pages/specialOffer/specialOffer';
import { ContactsInfo } from './pages/contactsInfo/contactsInfo';

export const Main = (elem = null) => {
  const main = $el('main', { className: 'main' });

  Advertising(main);
  SpecialOffer(main);
  ContactsInfo(main);
  elem.append(main);
};
