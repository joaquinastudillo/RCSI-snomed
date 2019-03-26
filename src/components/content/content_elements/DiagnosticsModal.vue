<template>
  <div modal-card-body-background-color="#fff" class="modal" :class="{'is-active': displayModal}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Mappings</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <div class="timeline" v-if="mappings.snomedMappingType">
          <header class="timeline-header">
            <span class="tag is-medium is-primary">{{ mappings.snomedMappingType }}</span>
          </header>
          <div class="timeline-item">
            <div class="timeline-marker is-icon">
              <i class="fas fa-sitemap"></i>
            </div>
            <div class="timeline-content">
              <p class="heading">description</p>
              <p>{{ mappings.snomedMappingDescription }}</p>
            </div>
          </div>
          <div class="timeline-header">
            <span class="tag is-medium is-primary">End</span>
          </div>
        </div>

        <div v-else-if="Object.keys(mappings).length" class="container">
          <div class="timeline" :key="index" v-for="(item,index) in mappings">
            <header class="timeline-header">
              <span class="tag is-medium is-primary">{{ index }}</span>
            </header>
            <div class="timeline-item" :key="index" v-for="(element,index) in item">
              <div class="timeline-marker is-icon">
                <i class="fas fa-sitemap"></i>
              </div>
              <div class="timeline-content">
                <p class="heading">description</p>
                <p>{{element.snomedMappingDescription}}</p>
              </div>
            </div>
            <div class="timeline-header">
              <span class="tag is-medium is-primary">End</span>
            </div>
            <br>
          </div>
        </div>

        <div class="content" v-else>
          <p>this item doesn't have relationships</p>
        </div>
        <!--<article class="message is-primary" v-if="this.$props.signs.length > 0">
          <div class="message-header">
            <p>Signs</p>
          </div>
          <div class="message-body">
            <ul>
              <li
                :key="sign.snomedCoreID"
                v-for="sign in this.$props.signs"
              >{{ sign.snomedDescription }}</li>
            </ul>
          </div>
        </article>
        <article class="message is-primary" v-if="this.$props.symptoms.length > 0">
          <div class="message-header">
            <p>Symptoms</p>
          </div>
          <div class="message-body">
            <ul>
              <li
                :key="symptom.snomedCoreID"
                v-for="symptom in this.$props.symptoms"
              >{{ symptom.snomedDescription }}</li>
            </ul>
          </div>
        </article>
        <article class="message is-primary" v-if="this.$props.riskFactors.length > 0">
          <div class="message-header">
            <p>Risk Factors</p>
          </div>
          <div class="message-body">
            <ul>
              <li
                :key="riskFactor.snomedCoreID"
                v-for="riskFactor in this.$props.riskFactors"
              >{{ riskFactor.snomedDescription }}</li>
            </ul>
          </div>
        </article>-->
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button" @click="closeModal">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiagnosticsModal",
  props: ["signs", "symptoms", "riskFactors"],
  computed: {
    displayModal() {
      return this.$store.getters.showModal;
    },
    mappings() {
      return this.$store.getters.mappingElements;
    }
  },
  methods: {
    closeModal() {
      this.$store.commit("SET_MODAL_VALUE");
    }
  }
};
</script>

<style scoped>
@import "../../../../node_modules/bulma-timeline/dist/css/bulma-timeline.min.css";
</style>