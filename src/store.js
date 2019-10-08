import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  modules:{
  },
  state: {
    images: [],
    uploadImage: null,
    index: 0,
      imageLinkRef: null
  },
  mutations: {
    setImages(state, images){
      state.images = images
    },
    setUploadImage(state, image){
      state.uploadImage = image;
    },
    addImage(state,image){
      state.images.push(image);
    },
    increment(state){
      state.index = (state.index + 1) % state.images.length;
    },
    decrement(state){
      let newIndex = state.index - 1;
      state.index = (newIndex < 0) ? state.images.length-1 : newIndex;
    },
      setImageLink(state,image){
        state.imageLinkRef = image;
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
        let data = [];
        let images = [];
        let directory = '';
        let extension = '';


        // Load Test Images
        data = await fetch('/fixtures/images_data.json');
        images = await data.json();
        commit('setImages', images, { root:true });




      // Load Memes
        directory = '/memes/';
        extension = '.jpg';
        for (let i=1;i<=27;i++){
          let path = directory + "meme" + i + extension;
          let imageAux = {name: path};
          images.push(imageAux);
        }




    }
  }
})
