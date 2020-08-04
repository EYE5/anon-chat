import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import ChatRoom from '../views/ChatRoom.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/chatroom',
    name: 'ChatRoom',
    component: ChatRoom,
  },
  {
    path: '/',
    name: 'App',
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
