import { $el } from '../../../../services/services';
import { Contacts } from '../../../../components/contacts';
import { contactsInfoSchema } from '../../../../schemas/contactsInfoSchema';
import './contactsInfo.scss';

const ContactsList = elem => {
  const container = $el('ul', { className: 'contactsInfo_list' });

  container.append(
    ...contactsInfoSchema.map(list => {
      const { alt, link, src } = list;
      const container = $el('li', { className: 'contactsInfo_list__item' });

      container.append(
        $el('img', {
          src,
          alt,
        }),
        $el('a', {
          href: link,
          target: 'blank',
        })
      );

      return container;
    })
  );

  elem.append(container);
};

const Address = elem => {
  const container = $el('a', {
    className: 'contactsInfo_address',
    href: `https://www.google.com/maps/place/%D0%9D%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0%BF%D1%80.,+140,+%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3,+191036/@59.9300545,30.3692511,17z/data=!4m13!1m7!3m6!1s0x469631bb92b2b7f5:0xfc6c3540c8fb3df8!2z0J3QtdCy0YHQutC40Lkg0L_RgC4sIDE0MCwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDE5MTAzNg!3b1!8m2!3d59.9300545!4d30.3692511!3m4!1s0x469631bb92b2b7f5:0xfc6c3540c8fb3df8!8m2!3d59.9300545!4d30.3692511`,
    innerText: `198555, Невский пр. 140, офис 140`,
    target: 'blank',
  });

  elem.append(container);
};

export const ContactsInfo = (elem = null) => {
  const container = $el('main', { className: 'contactsInfo' });

  ContactsList(container);
  Address(container);
  Contacts(container);
  elem.append(container);
};
