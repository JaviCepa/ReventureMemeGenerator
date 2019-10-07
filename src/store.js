import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  modules:{
  },
  state: {
    images: [],
    uploadImage: null,
    index: 0
  },
  mutations: {
    setImages(state, images){
      state.images = images
    },
    setUploadImage(state, image){
      state.uploadImage = image;
    },
    addImage(state){
      console.log("añado imagen")
    },
    increment(state){
      state.index = (state.index + 1) % state.images.length;
    },
    decrement(state){
      let newIndex = state.index - 1;
      state.index = (newIndex < 0) ? state.images.length-1 : newIndex;
    }

  },
  getters:{
    getImage: state => {
      return state.images[state.index];
    },
    getIndex: state =>{
      return state.index;
    }
  }
  ,
  actions: {
    async fetchImages ({commit}) {
      const data = await fetch('/fixtures/images_data.json');
      const images = await data.json();
      commit('setImages', images, { root:true });
    }
  }
})
