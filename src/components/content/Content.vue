<template>
  <section class="section">
    <div class="container">
      <TopMenu />
      <SearchBar v-if="this.$route.name !== 'create' && this.$route.name !== 'edit'"/>
      <transition name="fade">
      <router-view></router-view>
      </transition>
    </div>
  </section>
</template>

<script>
import SearchBar from "./content_elements/SearchBar";
import TopMenu from "./content_elements/TopMenu";
export default {
  name: "Content",
  components: {
    SearchBar,
    TopMenu
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
