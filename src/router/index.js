import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/Home.vue'
import AddCurrency from './../views/AddCurrency.vue'
import EditCurrency from './../views/EditCurrency.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/currencies/add',
      name: 'Add',
      component: AddCurrency
    },
    {
      path: '/currencies/edit/:id',
      name: 'edit',
      component: EditCurrency
    }
  ]
})
