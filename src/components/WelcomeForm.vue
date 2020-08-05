<template>
  <div class="form-login">
    <h3>Введите имя пользователя</h3>
    <v-text-field
      solo
      v-model="username"
      hint="Должно быть от 3 до 10 символов"
      autofocus
      @input="checkUsername"
      @keyup.enter="setUsername"
      class="mt-5"
    />
    <h5 class="text-center" v-if="isUserAlreadyExist">
      Имя пользователя занято
    </h5>
    <v-btn
      color="primary"
      @click="setUsername"
      height="50px"
      v-bind:disabled = "inputError"
    >
    Подключиться
    </v-btn>
  </div>
</template>
<script>
export default {
  name: 'WelcomeForm',
  data() {
    return {
      username: '',
    };
  },
  computed: {
    inputError() {
      return this.$store.state.inputError;
    },
    isUserAlreadyExist() {
      return this.$store.state.isUserAlreadyExist;
    },
  },
  methods: {
    setUsername() {
      this.$store.dispatch('setUserName', this.username);
    },
    checkUsername() {
      if (this.username.length <= 3 || this.username.length > 10) {
        this.$store.dispatch('setError', true);
      } else {
        this.$store.dispatch('setError', false);
      }
    },
  },
};
</script>
<style lang="sass">
.form-login
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%,-50%)
  display: flex
  flex-direction: column
  width: 380px
  height: 290px
  box-shadow: 10px 10px 18px 3px rgba(0, 0, 0, 0.44)
  border-radius: 25px
  padding: 40px

</style>
