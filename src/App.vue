<template>
  <div id="app">
    <v-app id="inspire">
    <v-row>
      <MyHeader />
    </v-row>
    <v-row>
      <router-view></router-view>
    </v-row>
    <v-row>
      <MyFooter />
    </v-row>
    </v-app>
  </div>
</template>

<script>
import MyHeader from './views/MyHeader.vue'
import MyFooter from './views/MyFooter.vue'

export default {
  name: 'App',

  components: {
    MyHeader,
    MyFooter
  }
};
</script>

