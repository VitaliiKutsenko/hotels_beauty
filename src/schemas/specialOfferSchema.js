import chair from '../../public/pics/offers/Rectangle 4.png';
import mail from '../../public/pics/offers/mail.svg';

const offer = {
  info: `Парикмахерское кресло
   «Норм» гидравлическое`,
  price: '9 900 ₽',
  img: chair,
};

export const offers = new Array(4).fill(offer);

export const offerCardsSchema = [
  {
    type: 'email',
    title: `Получайте бонусы и подарки`,
    info: `Каждый месяц разыгрываем
  10 000 рублей для наших клиентов`,
    img: mail,
  },
  {
    type: 'map',
    title: `Заходите к нам`,
    info: `Более 300 магазинов
    по всей России`,
    img: null,
  },
];
