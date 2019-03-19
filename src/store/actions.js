import axios from "axios";

export const loadData = ({commit}, searchData) => {

     //let apiUrl = process.env.API_URL;
     commit('SET_SEARCH_DATA', searchData);
     commit('SET_LOADING_VALUE');
     let apiUrl = "http://localhost:8080/CancerResearchUK/interfaces/query/snomed/searchtext/";
     axios.get(`${apiUrl} ${searchData.text}${searchData.type}?type=json`)
     .then(response => {
         const snomedItems = response.data.snomedcoreItem;
         commit('SET_SNOMED_ITEMS', snomedItems);
     })
     .then(() => {
        commit('SET_LOADING_VALUE');
     });
     //.catch(e => console.log(e));
};



