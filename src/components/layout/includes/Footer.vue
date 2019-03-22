<template>
  <footer class="footer">
    <div class="columns is-mobile is-centered">
      <div class="field is-grouped is-grouped-multiline">
        <div class="control">
          <div class="tags has-addons">
            <a class="tag is-link" id="rcsiLink" href="https://www.rcsi.com/dublin/">RCSI</a>
            <span id="gpLink" class="tag is-info">General Practice</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#rcsiLink {
  background-color: #de1834;
}
#gpLink {
  background-color: #222222;
}
</style>
