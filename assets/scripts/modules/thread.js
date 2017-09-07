const COLLAPSED_CSS_CLASS = 'email--collapsed';
let ITEMS;

const getEmailContent = (item) => {
  return item.querySelector('.email');
};

const closeAllBut = (except) => {
  ITEMS.forEach(item => {
    if (item !== except) {
      closeItem(item);
    }
  });
};

const closeItem = (item) => {
  return getEmailContent(item).classList.add(COLLAPSED_CSS_CLASS);
};

const openItem = (item) => {
  return getEmailContent(item).classList.remove(COLLAPSED_CSS_CLASS);
};

const init = (container) => {
  ITEMS = [...container.querySelectorAll('.thread__list-item')];

  closeAllBut(ITEMS[0]);

  container.addEventListener('click', (event) => {
    const { target } = event;
    const closest = target.closest('.thread__list-item');
    let item;

    if (target.matches('.thread__list-item')) {
      item = target;
    } else if (closest) {
      item = closest;
    }

    if (item) {
      openItem(item);
      closeAllBut(item);
    }
  });
};

export { init };