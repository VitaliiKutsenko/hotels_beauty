import './header.scss';
import { $el } from '../../services/services';
import { headerSchema, navigationSchema } from '../../schemas/navigationSchema';
import logo from './../../../public/pics/header/logo.svg';
import { Contacts } from '../../components/contacts';

const Logo = () => {
  const logoWrapper = $el('div', { className: 'header_logo' });

  logoWrapper.append($el('img', { src: logo }), $el('h1', { innerText: 'BEAUTY' }));

  return logoWrapper;
};

const Nav = (elem, schema, className) => {
  const navWrapper = $el('nav', { className: `${className}_nav` });

  const navLists = $el('ul', { className: `${className}_nav__list` });

  navLists.append(
    ...schema.map(item => {
      return $el('li', { textContent: item });
    })
  );

  navWrapper.append(navLists);

  elem.append(navWrapper);
};

export const Header = (elem = null) => {
  const header = $el('header', { className: 'header' });
  const contacts = $el('div', { className: 'header_contacts' });

  Nav(header, navigationSchema, 'header');
  contacts.append(Logo(), Contacts());
  header.append(contacts);
  Nav(header, headerSchema, 'navigation');

  elem.append(header);
};
