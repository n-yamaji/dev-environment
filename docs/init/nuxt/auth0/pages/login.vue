<template>
  <v-row justify="center">
    <v-card class="pa-2">
      <v-img src="f_logo.png" />
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" @click="loginWithAuthZero">
          ログインページへ
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'guest',
  methods: {
    loginWithAuthZero() {
      this.$auth.loginWith('auth0')
    }
  }
})
</script>
