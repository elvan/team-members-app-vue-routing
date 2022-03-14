import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import UsersList from './components/users/UsersList.vue';

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
  next();
});

router.afterEach((to, from) => {
  console.log('Global afterEach');
  console.log(to, from);
});

const app = createApp(App);

app.use(router);

app.mount('#app');
