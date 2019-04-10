<template>
  <div class="content is-medium">
    <DiagnosticsModal
      :symptoms="this.symptoms"
      :signs="this.signs"
      :riskFactors="this.riskFactors"
    />
    <DeleteModal :id="this.idTerm"/>
    <div
      class="box"
      v-if="this.filteredItems !== undefined && Object.keys(filteredItems).length > 0"
    >
      <div id="headerResults">
        <h4 id="const" class="title is-3">Results: {{ Object.keys(filteredItems).length }}</h4>
        <button class="button is-info" @click="openModal" v-if="showFormButton">
          <i class="fas fa-file-medical"></i>
        </button>
      </div>
      <div id="tableWrapper">
        <div class="control column is-one-quarter" id="searchBar">
          <input class="input" type="text" placeholder="filter..." v-model="search">
        </div>
        <table class="table is-hoverable">
          <thead>
            <tr>
              <th>
                <abbr title="Position">Id</abbr>
              </th>
              <th>Description</th>
              <th>Mappings</th>
              <th>
                <abbr>Actions</abbr>
              </th>
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
                <a v-else class="has-text-primary" target="_blank">No data available</a>
              </td>
              <td>
                <div class="buttons">
                  <a
                    class="button is-primary is-outlined is-small"
                    @click="getMappings(item.snomedCoreID)"
                    v-if="item.snomedCoreID"
                  >
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a class="button is-danger is-outlined is-small" v-else disabled>
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </td>
              <td>
                <div class="buttons" v-if="item.snomedCoreID">
                  <span
                    class="button is-small is-warning has-text-white"
                    @click="goToEdit(item.snomedCoreID)"
                  >
                    <i class="far fa-edit"></i>
                  </span>
                  <span
                    class="button is-small is-danger"
                    @click="openDeleteModal(item.snomedCoreID)"
                  >
                    <i class="far fa-trash-alt"></i>
                  </span>
                </div>
                <div class="buttons" v-else>
                  <span class="button is-small is-danger" disabled>
                    <i class="fas fa-times"></i>
                  </span>
                </div>
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
  </div>
</template>

<script>
import { mapActions } from "vuex";
import DiagnosticsModal from "./DiagnosticsModal";
import DeleteModal from "../crud/DeleteModal";
export default {
  name: "DiagnosticsBox",
  components: {
    DiagnosticsModal,
    DeleteModal
  },
  data() {
    return {
      signs: [],
      symptoms: [],
      riskFactors: [],
      search: "",
      idTerm: ""
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
    openDeleteModal(id) {
      if (id) {
        this.idTerm = id;
        this.$store.commit("SET_DELETE_TERM_MODAL_VALUE");
      }
    },
    getMappings(id) {
      if (id) {
        let idToFind = id.split("/id/")[1];
        this.getMappingsData(idToFind);
        this.openModal();
      }
    },
    goToEdit(id) {
      if (id) {
        this.$router.push({
          name: "edit"
        });
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
#tableWrapper {
  overflow-x: auto;
}
</style>
