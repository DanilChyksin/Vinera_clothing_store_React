const defaultState = {
  items: [
    {
      id: 1,
      title: "Кофта",
      img: "catalog 1.jpg",
      desc: "Платье-футляр из плотного трикотажа в рубчик.",
      category: "dresses",
      price: "4.999",
      new: 1,
      hits: 0,
    },
    {
      id: 2,
      title: "Кофта",
      img: "catalog 2.jpg",
      desc: "Платье-футляр из плотного трикотажа в рубчик.",
      category: "sweatshirts",
      price: "4.999",
      new: 1,
      hits: 0,
    },
    {
      id: 3,
      title: "Кофта",
      img: "catalog 3.jpg",
      desc: "Платье-футляр из плотного трикотажа в рубчик.",
      category: "trousers",
      price: "4.999",
      new: 1,
      hits: 0,
    },
    {
      id: 4,
      title: "Кофта",
      img: "catalog 4.jpg",
      desc: "Платье-футляр из плотного трикотажа в рубчик.",
      category: "jeans",
      price: "4.999",
      new: 1,
      hits: 0,
    },
    {
      id: 5,
      title: "Кофта",
      img: "catalog 1.jpg",
      desc: "Платье-футляр из плотного трикотажа в рубчик.",
      category: "dresses",
      price: "4.999",
      new: 0,
      hits: 1,
    },
    {
      id: 6,
      title: "Кофта",
      img: "catalog 2.jpg",
      desc: "Платье-футляр из плотного трикотажа в рубчик.",
      category: "sweatshirts",
      price: "4.999",
      new: 0,
      hits: 1,
    },
    {
      id: 7,
      title: "Кофта",
      img: "catalog 3.jpg",
      desc: "Платье-футляр из плотного трикотажа в рубчик.",
      category: "trousers",
      price: "4.999",
      new: 0,
      hits: 1,
    },
    {
      id: 8,
      title: "Кофта",
      img: "catalog 4.jpg",
      desc: "Платье-футляр из плотного трикотажа в рубчик.",
      category: "jeans",
      price: "4.999",
      new: 0,
      hits: 1,
    },
    {
      id: 9,
      title: "Кофта",
      img: "catalog 1.jpg",
      desc: "Платье-футляр из плотного трикотажа в рубчик.",
      category: "dresses",
      price: "4.999",
      new: 0,
      hits: 0,
    },
    {
      id: 10,
      title: "Кофта",
      img: "catalog 2.jpg",
      desc: "Платье-футляр из плотного трикотажа в рубчик.",
      category: "sweatshirts",
      price: "4.999",
      new: 0,
      hits: 0,
    },
  ],
  categories: [
    {
      key: "all",
      name: "Всё",
    },
    {
      key: "dresses",
      name: "Платья",
    },
    {
      key: "sweatshirts",
      name: "Кофты",
    },
    {
      key: "trousers",
      name: "Штаны",
    },
    {
      key: "jeans",
      name: "Джинсы",
    },
    {
      key: "t-shirts",
      name: "Футболки",
    },
    {
      key: "bags",
      name: "Cумки",
    },
  ],
  fullItem: [],
  orders: [],
  categoriesitem: [],
};

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_FULLITEM":
      return { ...state, fullItem: action.payload };
    case "ADD_ORDERS":
      return { ...state, orders: [action.payload] };
    case "REMOVE_ORDERS":
      return {
        ...state,
        orders: [],
      };
    case "CATEGORIES_ITEM":
      return {
        ...state,
        categoriesitem: state.items.filter(
          (el) => el.category !== action.payload
        ),
      };
    default:
      return state;
  }
};
