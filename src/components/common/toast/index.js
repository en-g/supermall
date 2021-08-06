import Toast from "./Toast";

const obj = {}

obj.install = function(Vue) {
  //创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  //通过new方式创建组件对象
  const toast = new toastConstructor()

  //将组件对象挂载到某一元素上
  toast.$mount(document.createElement("div"))

  //将组建挂载的元素添加到body上
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj
