(()=>{"use strict";var t,r={7242:(t,r,e)=>{function n(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,a,o,i,c=[],l=!0,f=!1;try{if(o=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;l=!1}else for(;!(l=(n=o.call(e)).done)&&(c.push(n.value),c.length!==r);l=!0);}catch(t){f=!0,a=t}finally{try{if(!l&&null!=e.return&&(i=e.return(),Object(i)!==i))return}finally{if(f)throw a}}return c}}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return a(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var o=function(t){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=document.createElement(t),a=0,o=Object.entries(r);a<o.length;a++){var i=n(o[a],2),c=i[0],l=i[1];c in e&&(e[c]=l)}return e},i=["Доставка","Оплата","Отзывы","Вопрос - ответ","Контакты"],c=["Парикмахерская","Барбершоп","Маникюр","Педикюр","Массаж","Мебель"];const l=e.p+"35b29c7fc1b93eaf46e0851eaba279ee.svg";var f=function(t){var r=o("div",{className:"contacts__wrapper"});return r.append(o("a",{href:"tel:8 (812) 123-45-67",innerText:"8 (812) 123-45-67"}),o("button",{innerText:"Обратный звонок"})),t&&t.append(r),r};function s(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return u(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var p=function(){var t=o("div",{className:"header_logo"});return t.append(o("img",{src:l}),o("h1",{innerText:"BEAUTY"})),t},d=function(t,r,e){var n=o("nav",{className:"".concat(e,"_nav")}),a=o("ul",{className:"".concat(e,"_nav__list")});a.append.apply(a,s(r.map((function(t){return o("li",{textContent:t})})))),n.append(a),t.append(n)};const m=e.p+"1f7ebcacf070b873a97a0d8955bf5f27.png";var b="Супер кресло",v="Текст акции всегда отражает суть, а не просто\n  болтовню, поэтому внимательнее",y=function(t){var r=o("div",{className:"advertising_banner"});r.append(o("img",{src:m})),t.append(r)},g=function(t){var r=o("article",{className:"advertising_info"}),e=b,n=v;r.append(o("h3",{innerText:e}),o("p",{innerText:n}),o("button",{innerText:"Подробнее"})),t.append(r)},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=o("section",{className:"advertising"});y(r),g(r),t.append(r)};const w=e.p+"42e65e3cd6fc3a9dee677c9309bd303a.png",A=e.p+"9c57794b5e85df0dfc5ab2f8495fd062.svg";var _={info:"Парикмахерское кресло\n   «Норм» гидравлическое",price:"9 900 ₽",img:w},N=new Array(4).fill(_),S=[{type:"email",title:"Получайте бонусы и подарки",info:"Каждый месяц разыгрываем\n  10 000 рублей для наших клиентов",img:A},{type:"map",title:"Заходите к нам",info:"Более 300 магазинов\n    по всей России",img:null}];function D(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return x(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return x(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=o("ul",{className:"offerList"});r.append.apply(r,D(N.map((function(t){var r=t.info,e=t.price,n=t.img,a=o("li",{className:"offerList_list"});return a.append(o("img",{src:n}),o("p",{className:"offerList_list__info",innerText:r}),o("p",{className:"offerList_list__price",innerText:e}),o("button",{innerText:"Купить"})),a})))),t.append(r)};const T=e.p+"80f45269f6bdf19f8033834598ee8dbc.svg";function j(t){return function(t){if(Array.isArray(t))return C(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return C(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return C(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var I=function(t){switch(t){case"email":return o("input",{type:"mail",placeholder:"Введите e-mail"});case"map":return o("button",{innerText:"Карта магазинов"})}},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=o("ul",{className:"offerCards"});r.append.apply(r,j(S.map((function(t){var r=t.type,e=t.img,n=t.info,a=t.title,i=o("li",{className:"offerCards_list"}),c=o("section",{className:"offerCards_section"});c.append(o("h4",{className:"offerCards_section__title",innerText:a}),o("p",{className:"offerCards_section__info",innerText:n}),I(r));var l=e?o("img",{src:e,alt:r}):"";return i.append(c,l),i})))),t.append(r)},B=function(t){var r=o("article",{className:"specialOffer_header"});r.append(o("h2",{innerText:"Специальные предложения"}),o("img",{src:T})),t.append(r)},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=o("section",{className:"specialOffer"});B(r),O(r),k(r),t.append(r)};var L=[{src:e.p+"1f8b4b8aa45c70067d75c7428ff68a7a.svg",alt:"youtube",link:"https://www.youtube.com/"},{src:e.p+"70edc2665f2754ccec9c000f5b5d2d5c.svg",alt:"vk",link:"https://www.vk.ru/"},{src:e.p+"d90b7994f7fe9bbc92a160dfb4d96567.svg",alt:"facebook",link:"https://www.facebook.com/"},{src:e.p+"83e42a0cf6926ebabd4f422bfc733b93.svg",alt:"instagram",link:"https://www.instagram.com/"}];function M(t){return function(t){if(Array.isArray(t))return $(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return $(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return $(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var U=function(t){var r=o("ul",{className:"contactsInfo_list"});r.append.apply(r,M(L.map((function(t){var r=t.alt,e=t.link,n=t.src,a=o("li",{className:"contactsInfo_list__item"});return a.append(o("img",{src:n,alt:r}),o("a",{href:e,target:"blank"})),a})))),t.append(r)},Q=function(t){var r=o("a",{className:"contactsInfo_address",href:"https://www.google.com/maps/place/%D0%9D%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0%BF%D1%80.,+140,+%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3,+191036/@59.9300545,30.3692511,17z/data=!4m13!1m7!3m6!1s0x469631bb92b2b7f5:0xfc6c3540c8fb3df8!2z0J3QtdCy0YHQutC40Lkg0L_RgC4sIDE0MCwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDE5MTAzNg!3b1!8m2!3d59.9300545!4d30.3692511!3m4!1s0x469631bb92b2b7f5:0xfc6c3540c8fb3df8!8m2!3d59.9300545!4d30.3692511",innerText:"198555, Невский пр. 140, офис 140",target:"blank"});t.append(r)},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=o("main",{className:"contactsInfo"});U(r),Q(r),f(r),t.append(r)},F=document.querySelector("#root");!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=o("header",{className:"header"}),e=o("div",{className:"header_contacts"});d(r,i,"header"),e.append(p(),f()),r.append(e),d(r,c,"navigation"),t.append(r)}(F),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=o("main",{className:"main"});h(r),E(r),z(r),t.append(r)}(F),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=o("footer",{className:"footer"});r.append(o("p",{textContent:"Лучший магазин (с) 2019 Все права защищены. Интернет-магазин оборудования для салонов красоты"}),o("p",{textContent:"Политика конфиденциальности"})),t.append(r)}(F)}},e={};function n(t){var a=e[t];if(void 0!==a)return a.exports;var o=e[t]={exports:{}};return r[t](o,o.exports,n),o.exports}n.m=r,t=[],n.O=(r,e,a,o)=>{if(!e){var i=1/0;for(s=0;s<t.length;s++){for(var[e,a,o]=t[s],c=!0,l=0;l<e.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((t=>n.O[t](e[l])))?e.splice(l--,1):(c=!1,o<i&&(i=o));if(c){t.splice(s--,1);var f=a();void 0!==f&&(r=f)}}return r}o=o||0;for(var s=t.length;s>0&&t[s-1][2]>o;s--)t[s]=t[s-1];t[s]=[e,a,o]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var r=n.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var e=r.getElementsByTagName("script");e.length&&(t=e[e.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{var t={179:0};n.O.j=r=>0===t[r];var r=(r,e)=>{var a,o,[i,c,l]=e,f=0;if(i.some((r=>0!==t[r]))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(l)var s=l(n)}for(r&&r(e);f<i.length;f++)o=i[f],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(s)},e=self.webpackChunk=self.webpackChunk||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))})(),n.O(void 0,[202],(()=>n(1202)));var a=n.O(void 0,[202],(()=>n(7242)));a=n.O(a)})();