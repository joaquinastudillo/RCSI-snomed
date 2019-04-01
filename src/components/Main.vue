<template>
  <v-container>
    <v-card class="mx-auto" max-width="800">
      <v-sheet class="pa-3 teal accent-4 lighten-2">
        <v-text-field
          v-model="search"
          label="Search Snomed Term"
          dark
          flat
          solo-inverted
          hide-details
          clearable
          clear-icon="mdi-close-circle-outline"
        ></v-text-field>
      </v-sheet>
      <v-card-text>
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
          :search="search"
        >
          <template v-slot:prepend="{ item, active }">
            <v-icon v-if="!item.children" :color="active ? 'primary' : ''">mdi-account</v-icon>
          </template>
        </v-treeview>
      </v-card-text>
    </v-card>
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
      snomedcoreItems: [],
      search: null
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
      let url = `http://localhost/php-middleware/index.php/?route=tree&term=${
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
                text: "No data to display"
              });
            }
          }
        })
        .catch(e => console.log(e));
    }
  }
};
</script>

