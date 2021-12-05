const routes = [
  {
    path: '/',
    component: () => import('pages/Login.vue')
  },
  {
    path: '/register',
    component: () => import('pages/Register')
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '/crud', component: () => import('pages/Home.vue') },
    ]
  }
]

export default routes
