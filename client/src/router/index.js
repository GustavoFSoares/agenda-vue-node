import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home.vue'
import Edit from '@/components/Edit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: `/`,
      component: Home
    },
    {
      path: '/edit/:id',
      component: Edit
    },
    {
      path: '/app',
      component: HelloWorld
    },

  ],
  mode: 'history'
})
