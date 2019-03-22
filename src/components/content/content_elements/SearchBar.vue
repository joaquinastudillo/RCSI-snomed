<template>
  <div class="content is-medium">
    <h3 class="title is-3">Search Term</h3>
    <div class="box">
      <article>
        <div class="columns">
          <div class="column is-10">
            <div class="control has-icons-left has-icons-right">
              <input class="input is-large" type="search" v-model="search">
              <span class="icon is-medium is-left">
                <i class="fa fa-search"></i>
              </span>
              <span class="icon is-medium is-right">
                <i class="fab fa-empire"></i>
              </span>
            </div>
          </div>
          <div class="column is-2" id="searchColumn">
            <button
              class="button is-primary is-medium"
              @click="searchTerm"
              :disabled="!search.length > 0 || !isRadioButtonSelected"
            >Search</button>
          </div>
        </div>
      </article>
      <br>
      <label for class="radio">
        <input type="radio" name="search" @click="setRadio('')" v-model="searchType" value="all"> All
      </label>
      <label for class="radio">
        <input
          type="radio"
          name="search"
          @click="setRadio('(finding)')"
          v-model="searchType"
          value="(finding)"
        > Findings
      </label>
      <label for class="radio">
        <input
          type="radio"
          name="search"
          @click="setRadio('(situation)')"
          v-model="searchType"
          value="(situation)"
        > History
      </label>
      <label for class="radio">
        <input
          type="radio"
          name="search"
          @click="setRadio('(disorder)')"
          v-model="searchType"
          value="(disorder)"
        > Disorders
      </label>
      <label for class="radio">
        <input
          type="radio"
          name="search"
          @click="setRadio('(procedure)')"
          v-model="searchType"
          value="(procedure)"
        > Procedures
      </label>
      <label for class="radio">
        <input
          type="radio"
          name="search"
          @click="setRadio('(qualifier)')"
          v-model="searchType"
          value="(qualifier)"
        > Qualifiers
      </label>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SearchBar",
  data() {
    return {
      search: "",
      searchType: "",
      isRadioButtonSelected: false
    };
  },
  methods: {
    ...mapActions({
      fetchData: "loadData"
    }),
    setRadio(text) {
      this.isRadioButtonSelected = true;
      this.searchType = text;
    },
    searchTerm() {
      if (this.$route.name === "home") {
        this.$router.push({
          name: "search",
          params: {
            text: this.search,
            type: this.searchType
          }
        });
      } else if (this.$route.name === "search") {
        let searchData = {
          text: this.search,
          type: this.searchType
        };
        this.fetchData(searchData);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#searchColumn {
  display: flex;
  align-items: center;
}
</style>
