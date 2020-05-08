import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';
import Context from './context.js';

Vue.use(Vuetify);
const vuetify = new Vuetify({});

Vue.config.productionTip = false;

new Vue({
  router,
  data: {
    ctx: {},
  },
  async created () {
    this.ctx = new Context(this.$route.query);
    await this.ctx.init();
  },
  vuetify,
  render: h => h(App),
}).$mount('#app');
