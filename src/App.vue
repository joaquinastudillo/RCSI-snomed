<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light"> TREE VIEW</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <Main />
    </v-content>
  </v-app>
</template>

<script>
import Main from './components/Main'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Main
  },
  data () {
    return {
      //
    }
  }
}
</script>
