<template>
  <div modal-card-body-background-color="#fff" class="modal" :class="{'is-active': displayModal}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Diagnostics</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <article class="message is-primary" v-if="this.$props.signs.length > 0">
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
        </article>
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
    zeroDataInModal() {
      return this.$props.riskFactors.length === 0 ||
        this.$props.signs.length === 0 ||
        this.$props.symptoms.length === 0
        ? false
        : true;
    },
    displayModal() {
      return this.$store.getters.showModal;
    }
  },
  methods: {
    closeModal() {
      this.$store.commit("SET_MODAL_VALUE");
    }
  }
};
</script>