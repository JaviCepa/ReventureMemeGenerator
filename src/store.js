import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  modules:{
  },
  state: {
    images: [],
    index: 0
  },
  mutations: {
    setImages(state, images){
      state.images = images
    },
    addImage(state){
      console.log("añado imagen")
    },
    increment(state){
      console.log("Actualizo Index");
      state.index = (state.index + 1) % state.images.length;
    }

  },
  actions: {
    async fetchImages ({commit}) {
      const data = await fetch('/fixtures/images_data.json');
      const images = await data.json();
      commit('setImages', images, { root:true });
    },
    increment (context){
      context.commit('increment');
    }
  }
})
