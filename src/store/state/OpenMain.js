const defaultState = {
  mainOpen: false,
  basketOpen: false,
  openItem: false,
  categoryOpen: false,
  gohome: false,
};
export const reducerState = (state = defaultState, action) => {
  switch (action.type) {
    case "OPEN_MAIN":
      return { ...state, mainOpen: true };
    case "CLOSE_MAIN":
      return { ...state, mainOpen: false };
    case "OPEN_BASKET":
      return { ...state, basketOpen: true };
    case "CLOSE_BASKET":
      return { ...state, basketOpen: false };
    case "OPEN_ITEM":
      return { ...state, openItem: !state.openItem };
    case "CLOSE_ITEM":
      return { ...state, openItem: false };
    case "OPEN_CATEGORY":
      return { ...state, categoryOpen: true };
    case "CLOSE_CATEGORY":
      return { ...state, basketOpen: false };
    case "GO_HOME":
      return { ...state, basketOpen: true, mainOpen: false, openItem: false };

    default:
      return state;
  }
};
