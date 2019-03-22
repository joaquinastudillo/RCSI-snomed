import axios from "axios";

var _ = require("lodash");

export const loadData = ({ commit }, searchData) => {
  //let apiUrl = process.env.API_URL;
  commit("SET_SEARCH_DATA", searchData);
  commit("SET_LOADING_VALUE");
  if (searchData.type === "all") {
    searchData.type = "";
  }
  let apiUrl =
    "http://localhost:8080/CancerResearchUK/interfaces/query/snomed/searchtext/";
  axios
    .get(`${apiUrl} ${searchData.text}${searchData.type}?type=json`)
    .then(response => {
      const snomedItems = response.data.snomedcoreItem;
      commit("SET_SNOMED_ITEMS", snomedItems);
    })
    .then(() => {
      commit("SET_LOADING_VALUE");
    });
  //.catch(e => console.log(e));
};

export const loadMappings = ({ commit }, id) => {
  let apiUrl = `http://localhost:8080/CancerResearchUK/interfaces/query/snomed/mappings/${id}`;
  commit("SET_LOADING_VALUE");
  axios
    .get(apiUrl)
    .then(response => {
      //check if data is coming
      if (response.data.snomedMappingItem) {
        let mappingItems = response.data.snomedMappingItem;

        //if it's more than 1 value group by tables
        if (Array.isArray(mappingItems)) {
          mappingItems = _.groupBy(
            mappingItems,
            item => item.snomedMappingType
          );
          commit("SET_MAPPING_ITEMS", mappingItems);
        } else {
          if (typeof mappingItems === "object") {
            commit("SET_MAPPING_ITEMS", mappingItems);
          }
        }
      } else {
        commit("SET_MAPPING_ITEMS", {});
      }
    })
    .then(() => {
      commit("SET_LOADING_VALUE");
    });
};
