/* eslint eol-last: ["error", "never"] */
/* eslint indent: ["error", "never" ]*/

import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Chapter from '@/components/Chapter'
import Item from '@/components/Item'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Chapter',
      component: Chapter
    },
    {
      path: '/chapter/:id',
      name: 'Item',
      component: Item
    }
  ]
})