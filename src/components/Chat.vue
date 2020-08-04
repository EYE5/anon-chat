<template>
<div>
  <v-app-bar>
    <v-toolbar-title>anon-chat</v-toolbar-title>
    <v-spacer/>
  </v-app-bar>
<v-container>
  <v-sheet elevation="5">
    <v-tabs centered v-model="tab">
      <v-tab>Чат</v-tab>
      <v-tab @click="getUserList">Пользователи</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
      <ChatWindow/>
      </v-tab-item>
      <v-tab-item>
      <UsersWindow />
      </v-tab-item>
    </v-tabs-items>
  </v-sheet>
</v-container>
</div>
</template>

<script>
import ChatWindow from './ChatWindow.vue';
import UsersWindow from './UsersWindow.vue';

export default {
  name: 'Chat',
  components: { UsersWindow, ChatWindow },
  data() {
    return {
      tab: null,
    };
  },
  methods: {
    getUserList() {
      this.$store.dispatch('getUsersOnline');
    },
  },
};
</script>
