<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs-12>
        <v-treeview
          :items="items"
          :load-children="fetchsnomedcoreItems"
          activatable
          active-class="primary--text"
          class="grey lighten-5"
          open-on-click
          transition
          item-key="text"
          item-text="text"
        >
          <template v-slot:prepend="{ item, active }">
            <v-icon v-if="!item.children" :color="active ? 'primary' : ''">mdi-account</v-icon>
          </template>
        </v-treeview>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
export default {
  name: "Main",
  components: {},
  data() {
    return {
      snomedcoreItems: []
    };
  },
  computed: {
    items() {
      return [
        {
          text: "Clinical finding (finding)",
          children: this.snomedcoreItems
        }
      ];
    }
  },
  methods: {
    async fetchsnomedcoreItems(item) {
      await pause(1500);
      const url = `http://localhost:8080/CancerResearchUK/interfaces/query/snomed/tree/subclass/${
        item.text
      }`;
      return axios
        .get(url)
        .then(response => {
          let dataArray = response.data.snomedcoreItem;
          if (Array.isArray(dataArray)) {
            dataArray.forEach(element => {
              this.$set(element, "children", []);
              item.children.push(element);
            });
          } else {
            if (typeof dataArray === "object") {
              if (dataArray.text) {
                dataArray.children = [];
                item.children.push(dataArray);
              }
            } else {
              item.children.push({
                text: "No data more to display"
              });
            }
          }
        })
        .catch(e => console.log(e));
    }
  }
};
</script>

