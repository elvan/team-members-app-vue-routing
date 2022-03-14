import { createRouter, createWebHistory } from 'vue-router';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import NotFound from './pages/NotFound.vue';
import TeamMembers from './pages/TeamMembers.vue';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      path: '/teams',
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      // alias: '/',
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
      meta: {
        needsAuthentication: true,
      },
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter: (to, from, next) => {
        console.log('UsersList beforeEnter');
        console.log(to, from);
        next();
      },
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuthentication) {
    console.log('Needs Authentication');
  }
  next();
});

router.afterEach((to, from) => {
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
