const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SHAVA_CART': {
      const currentShavaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentShavaItems,
          totalPrice: getTotalPrice(currentShavaItems),
        },
      };

      const items = Object.values(newItems).map(obj => obj.items);
      const allShavas = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allShavas);

      return {
        ...state,
        items: newItems,
        totalCount: allShavas.length,
        totalPrice,
      };
    }

    default:
      return state;
  }
};

export default cart;