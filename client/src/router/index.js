import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Add from '@/components/Add.vue'
import Edit from '@/components/Edit.vue'

Vue.use(Router)

export default new Router({
  routes: [
        {
            path: `/`,
            component: Home
        },
        {
            path: '/add/',
            component: Add
        },
        {
            path: '/edit/:id',
            component: Edit
        },
  ],
  mode: 'history'
})
