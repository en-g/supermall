import {ADD_COUNTER, ADD_TO_CART} from "./mutation-type";

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        //商品已在购物车
        context.commit(ADD_COUNTER, oldProduct)
        resolve("商品数量加1")
      } else {
        //商品第一次添加
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        resolve("商品添加成功")
      }
    })
  }
}
