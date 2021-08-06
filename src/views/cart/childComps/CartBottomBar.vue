<template>
  <div class="bottom-menu">
    <CheckButton :isChecked="isSelectAll"
                 class="select-all"
                 @click.native="checkClick"/>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product">结算({{checkLength}})</span>
  </div>
</template>

<script>
  import CheckButton from "components/contnet/checkButton/CheckButton";
  import { mapGetters } from "vuex"

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(["cartList"]),
      totalPrice() {
        return this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
            return preValue + item.price * item.count
        }, 0)
      },
      checkLength() {
        return this.cartList.filter(item => item.checked).length
      },
      isSelectAll() {
        if (this.cartList.length === 0) return false
        return !this.cartList.find(item => !item.checked)
      }
    },
    methods: {
      checkClick() {
        if (this.isSelectAll) {
          this.cartList.forEach(item => item.checked = false)
        } else {
          this.cartList.forEach(item => item.checked = true)
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 40px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    font-size: 14px;
    color: #888;
    line-height: 40px;
    padding-left: 30px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 5px;
    top: 11px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    float: right;
  }
</style>
