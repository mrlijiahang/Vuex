import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import Button from '@/components/Button'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Button',
      component: Button
    },
    {
      path: '/1',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/2',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
