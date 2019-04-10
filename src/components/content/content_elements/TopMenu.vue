<template>
  <div class="buttons" id="topMenu">
    <span class="button is-info" @click="$router.push({name: 'create'})">Create New Term &nbsp;<i class="fas fa-plus-square"></i></span>
  </div>
</template>

<script>
export default {
  name: "TopMenu",
  computed: {},
  methods: {}
};
</script>

<style scoped>
#topMenu {
  justify-content: flex-end;
}
</style>