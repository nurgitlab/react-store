export const addShavaToCart = (shavaObj) => ({
  type: 'ADD_SHAVA_CART',
  payload: shavaObj,
})

export const clearCart = () => ({
  type: 'CLEAR_CART',
})

export const removeCartItem = (id) => ({
  type: 'REMOVE_CART_ITEM',
  payload: id,
})