<template>
  <section class="section">
    <div class="container">
      <SearchBar />
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import SearchBar from './content_elements/SearchBar'
export default {
  name: "Content",
  components: {
    SearchBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
