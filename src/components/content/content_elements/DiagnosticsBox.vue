<template>
  <div class="content is-medium">
    <DiagnosticsModal
      :symptoms="this.symptoms"
      :signs="this.signs"
      :riskFactors="this.riskFactors"
    />
    <div class="box" v-if="this.filteredItems !== undefined">
      <div id="headerResults">
        <h4 id="const" class="title is-3">Results: {{ Object.keys(filteredItems).length }}</h4>
        <button class="button is-info" @click="openModal" v-if="showFormButton">
          <i class="fas fa-file-medical"></i>
        </button>
      </div>
      <div class="control column is-one-quarter" id="searchBar">
        <input class="input" type="text" placeholder="filter..." v-model="search">
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>
              <abbr title="Position">Id</abbr>
            </th>
            <th>Description</th>
            <th>Mappings</th>
            <!--<th>
              <abbr title="Won">Actions</abbr>
            </th>-->
          </tr>
        </thead>
        <tbody>
          <tr :key="item.snomedCoreID" v-for="item in filteredItems">
            <th v-if="item.snomedCoreID">{{ item.snomedCoreID | toId }}</th>
            <th v-else>0</th>
            <td>
              <a
                v-if="item.snomedDescription"
                class="has-text-primary"
                :href="item.snomedCoreID"
                target="_blank"
              >{{ item.snomedDescription }}</a>
              <a
                v-else
                class="has-text-primary"
                target="_blank"
              >No data available</a>
            </td>
            <td>
              <a class="button is-primary is-outlined" @click="getMappings(item.snomedCoreID)" v-if="item.snomedCoreID">
                <i class="fas fa-external-link-alt"></i>
              </a>
              <a class="button is-danger is-outlined" v-else disabled>
                <i class="fas fa-external-link-alt"></i>
              </a>
            </td>
            <!--<td>
              <div class="field">
                <input
                  class="is-checkradio is-block"
                  :id="`${item.snomedCoreID}/signs`"
                  type="checkbox"
                  v-model="signs"
                  :value="item"
                >
                <label :for="`${item.snomedCoreID}/signs`">Signs</label>
              </div>
              <div class="field">
                <input
                  class="is-checkradio is-block"
                  :id="`${item.snomedCoreID}/symptoms`"
                  type="checkbox"
                  v-model="symptoms"
                  :value="item"
                >
                <label :for="`${item.snomedCoreID}/symptoms`">Symptoms</label>
              </div>
              <div class="field">
                <input
                  class="is-checkradio is-block"
                  :id="`${item.snomedCoreID}/risk-factors`"
                  type="checkbox"
                  v-model="riskFactors"
                  :value="item"
                >
                <label :for="`${item.snomedCoreID}/risk-factors`">Risk Factors</label>
              </div>
            </td>-->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import DiagnosticsModal from "./DiagnosticsModal";
export default {
  name: "DiagnosticsBox",
  components: {
    DiagnosticsModal
  },
  data() {
    return {
      signs: [],
      symptoms: [],
      riskFactors: [],
      search: ""
    };
  },
  mounted() {
    if (this.$route.params.text && this.$route.params.type) {
      let searchData = {
        text: this.$route.params.text,
        type: this.$route.params.type
      };
      this.fetchData(searchData);
    }
  },
  methods: {
    ...mapActions({
      fetchData: "loadData",
      getMappingsData: "loadMappings"
    }),
    openModal() {
      this.$store.commit("SET_MODAL_VALUE");
    },
    getMappings(id) {
      if (id) {
        let idToFind = id.split("/id/")[1];
        this.getMappingsData(idToFind);
        this.openModal();
      }
    }
  },
  filters: {
    toId(text) {
      if (text) {
        return text.split("/id/")[1];
      }
    }
  },
  computed: {
    items() {
      return this.$store.getters.snomedElements;
    },
    filteredItems() {
      if (Array.isArray(this.items)) {
        return this.items.filter(item => {
          return item.snomedDescription
            .toLowerCase()
            .includes(this.search.toLowerCase());
        });
      } else {
        if (typeof this.items === "object") {
          return [this.items];
        } else {
          return [{}];
        }
      }
    },
    displayModal() {
      return this.$store.getters.showModal;
    },
    showFormButton() {
      return this.signs.length > 0 ||
        this.symptoms.length > 0 ||
        this.riskFactors.length > 0
        ? true
        : false;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../../../node_modules/bulma-checkradio/dist/css/bulma-checkradio.min.css";

#headerResults {
  display: flex;
  justify-content: space-between;
}
#searchBar {
  display: flex;
  float: right;
}
</style>
