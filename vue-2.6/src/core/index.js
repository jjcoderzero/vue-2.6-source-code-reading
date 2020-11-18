import Vue from './instance/index' //这里是我们 Vue 核心方法
import { initGlobalAPI } from './global-api/index' // 根据命名，应该可以猜出这里是初始化一些全局API
import { isServerRendering } from 'core/util/env' // 根据命名，这里应该是获取一个Boolean类型的变量，来判断是不是ssr
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

initGlobalAPI(Vue)// 为Vue原型定义属性$isServer
// 为Vue原型定义属性$isServer
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})
// 为Vue原型定义属性$ssrContext
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue
