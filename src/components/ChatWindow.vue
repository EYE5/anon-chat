<template>
      <v-card>
        <v-card-text class="pa-2">
          <v-virtual-scroll height="60vh" :item-height="50" :items="items" bench="10">
            <template v-slot="{item}">
              <v-list-item class="pa-0 " >
                <v-list-item-avatar max-width= "80px" width="70" class="ma-2 align-self-center">
                  {{item.username}}
                </v-list-item-avatar>
                <v-list-item-content class="pa-0">
                  <v-list-item-title>
                    {{item.message}}
                    <v-divider/>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-virtual-scroll>
          <v-spacer vertical/>
          <v-text-field color="#0260E8" v-model="message" @keyup.enter="messageSend"/>
        </v-card-text>
      </v-card>
</template>

<script>

export default {
  name: 'ChatWindow',
  data() {
    return {
      username: '',
      message: '',
      ws: '',
      offlineTimer: null,
    };
  },
  computed: {
    items() {
      return this.$store.state.messages;
    },
  },
  methods: {
    messageSend() {
      const messageData = {
        username: this.username,
        message: this.message,
      };
      this.ws.send(JSON.stringify(messageData));
      this.$store.dispatch('setUserOnline');
      this.message = '';
    },
  },
  beforeMount() {
    // eslint-disable-next-line no-restricted-globals
    this.ws = new WebSocket(location.origin.replace(/^http/, 'ws'));
    this.ws.onmessage = (event) => {
      this.$store.dispatch('setMessages', JSON.parse(event.data));
    };
  },
  mounted() {
    this.username = localStorage.getItem('username');
  },
};
</script>
