<template>
  <v-app>
    <v-main>
      <router-view>
      <Login/>
      <ChatRoom/>
      </router-view>
    </v-main>
  </v-app>
</template>

<script >
import ChatRoom from './views/ChatRoom.vue';
import Login from './views/Login.vue';

export default {
  name: 'App',

  components: {
    Login,
    ChatRoom,
  },
};
</script>
