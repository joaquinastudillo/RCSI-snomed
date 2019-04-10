<template>
  <div class="content is-medium">
    <h3 class="title is-3">Edit Term: #00000</h3>
    <div class="box">
      <article>
        <div class="field">
          <label class="label">ID</label>
          <div class="control">
            <input class="input" type="text" placeholder="ID..." value="#00000">
          </div>
        </div>

        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <input class="input" type="text" placeholder="Description..." value="Blood (finding)">
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary">Submit</button>
          </div>
          <div class="control">
            <button class="button is-text" @click="$router.go(-1)">Cancel</button>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditTerm",
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>