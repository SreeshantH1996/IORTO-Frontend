import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LogReg from '../views/LogReg.vue'
import UserHome from '../views/UserHome.vue'

Vue.use(VueRouter)
const user = localStorage.getItem('user');
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Login',
    component: LogReg
  },
  {
    path: '/userhome',
    name: 'UserHome',
    component: () => import(/* webpackChunkName: "userhome" */ '../views/UserHome.vue')
  },
  {
    path: '/userregistration',
    name: 'UserRegistration',
    component: () => import(/* webpackChunkName: "userhome" */ '../views/UserRegistration.vue')
  },
  {
    path: '/newlicence',
    name: 'NewLicence',
    component: () => import(/* webpackChunkName: "userhome" */ '../views/NewLicence.vue')
  },
  // CreateLicence
  {
    path: '/createlicence',
    name: 'CreateLicence',
    component: () => import(/* webpackChunkName: "userhome" */ '../views/CreateLicence.vue')
  },
  {
    path: '/uploaddocuments',
    name: 'UploadDocuments',
    component: () => import(/* webpackChunkName: "userhome" */ '../views/UploadDocuments.vue')
  },
  {
    path: '/payments',
    name: 'Payment',
    component: () => import(/* webpackChunkName: "userhome" */ '../views/Payment.vue')
  },
  {
    path: '/document_list',
    name: 'DocumentList',
    component: () => import(/* webpackChunkName: "userhome" */ '../views/DocumentList.vue')
  },
  {
    path: '/licence_renewal',
    name: 'LicenceRenewal',
    component: () => import(/* webpackChunkName: "userhome" */ '../views/LicenceRenewal.vue')
  },
  {
    path: '/licence_renewal_form',
    name: 'LicenceRenewalForm',
    component: () => import(/* webpackChunkName: "userhome" */ '../views/LicenceRenewalForm.vue')
  },
  {
    path: '/licence_renewal_upload_document',
    name: 'RenewalUploadDocument',
    component: () => import(/* webpackChunkName: "userhome" */ '../views/RenewalUploadDocument.vue')
  },
  {
    path: '/user_status',
    name: 'UserStatus',
    component: () => import(/* webpackChunkName: "userhome" */ '../views/UserStatus.vue')
  },
  {
    path: '/adminhome',
    name: 'Adminhome',
    component: () => import(/* webpackChunkName: "userhome" */ '../views/Adminhome.vue')
  },
  {
    path: '/rto_registration',
    name: 'RtoRegistration',
    component: () => import(/* webpackChunkName: "userhome" */ '../views/RtoRegistration.vue')
  },
  {
    path: '/rtohome',
    name: 'RtoHome',
    component: () => import(/* webpackChunkName: "userhome" */ '../views/RtoHome.vue')
  },
  {
    path: '/userlist',
    name: 'UserList',
    component: () => import(/* webpackChunkName: "userhome" */ '../views/UserList.vue')
  },
  {
    path: '/renewallist',
    name: 'LicenceRenewalList',
    component: () => import(/* webpackChunkName: "userhome" */ '../views/LicenceRenewalList.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
