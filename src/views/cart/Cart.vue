<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{carLength}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";

  import Scroll from "components/common/scroll/Scroll";

  import {mapGetters} from "vuex"

  export default {
    name: "Cart",
    components: {
      Scroll,
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters(["carLength"])
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 600;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 89px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>
