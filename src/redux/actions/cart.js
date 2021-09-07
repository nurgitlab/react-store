export const addShavaToCart = (shavaObj) => ({
  type: 'ADD_SHAVA_CART',
  payload: shavaObj,
})

export const clearCart = () => ({
  type: 'CLEAR_CART',
})