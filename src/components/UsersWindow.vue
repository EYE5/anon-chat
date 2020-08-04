<template>
  <v-card>
    <v-card-text>
      <v-virtual-scroll height="60vh" :item-height="50" :items="items">
        <template v-slot="{item}">
          <v-list-item >
            <v-list-item-title>
              {{item}}
            </v-list-item-title>
          </v-list-item>
        </template>
      </v-virtual-scroll>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'UsersWindow',
  computed: {
    items() {
      return this.$store.state.usersOnline;
    },
  },
};
</script>
