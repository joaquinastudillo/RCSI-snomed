<template>
  <div>
    <Loading color="#00d1b2" background="#00d1b22b" :active="isLoading" :is-full-page="true" />
    <Header/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./includes/Header";
import Footer from "./includes/Footer";
import Content from "../content/Content";
 // Import component
  import Loading from 'vue-loading-overlay';
  // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  name: "Layout",
  components: {
    Header,
    Footer,
    Content,
    Loading
  },
  computed: {
    isLoading(){
      return this.$store.getters.isLoading;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
