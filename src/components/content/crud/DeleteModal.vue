<template>
  <div id="modal" class="modal" :class="{'is-active': displayModal}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>
                <strong>SnomedCoreID</strong>
                &nbsp;<small class="tag is-primary">{{this.$props.id}}</small>
                <br>Do you really want to delete this item?
              </p>
            </div>
            <nav class="level is-mobile" id="confirmNav">
              <div class="level-right">
                <a class="level-item" aria-label="retweet">
                  <i class="fas fa-times"></i>
                </a>
                <a class="level-item has-text-danger" aria-label="retweet">
                  <i class="far fa-check-circle"></i>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </div>
    <button class="modal-close is-large" @click="closeModal" aria-label="close"></button>
  </div>
</template>

<script>
export default {
  name: "DeleteModal",
  props: ["id"],
  computed: {
    displayModal() {
      return this.$store.getters.showDeleteTermModal;
    }
  },
  methods: {
    closeModal() {
      this.$store.commit("SET_DELETE_TERM_MODAL_VALUE");
    }
  }
};
</script>

<style scoped>
#confirmNav {
  justify-content: flex-end;
}
</style>