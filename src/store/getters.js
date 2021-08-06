export default {
  carLength(state) {
    return state.cartList.length;
  },
  cartList(state) {
    console.log(state.cartList);
    return state.cartList
  }
}
