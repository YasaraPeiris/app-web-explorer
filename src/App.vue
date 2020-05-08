<template>
  <div id="app">
    <head>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
        rel="stylesheet"
      >
    </head>
    <v-app>
      <v-content>
        <v-container>
          <img
            src="./assets/logo.png"
            height="50px"
          >
          <router-view />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Context from './context.js';
export default {
  name: 'App',
  data: () => ({
    title: 'App-web-skeleton',
    ctx: {},
  }),
  async created () {
    this.$root.$ctx = new Context(this.$route.query);
    await this.$root.$ctx.init();
    this.ctx = this.$root.$ctx;
  },
  errorCaptured (err, vm, info) {
    alert(`[Vue warn]: Unexpected error in ${info}:
      ${err}`);
  },
};
</script>

<style>
  #app {
      font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
      text-align: center;
      padding-left: 20px;
      padding-right: 20px;
  }
  h3 {
    margin: 8px;
    display: inline;
  }
</style>
