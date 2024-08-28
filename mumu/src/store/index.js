import { createStore } from "vuex";
import card from "./modules/card";
import others from "./modules/others";
import more from "./modules/more";
import intro from "./modules/intro";
import que from "./modules/que";

console.log(card);

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    card,
    others,
    more,
    intro,
    que,
  },
});
