<template>
  <div id="app">
      <meme-layout>
        <template slot="controls">
          <controls></controls>
        </template>
        <template slot="headercontent">
          <header-component></header-component>
        </template>
        <template slot="canvasComponent">
          <canvas-component ref="canvas"></canvas-component>
        </template>
        <template slot="footercontent">
          <footer-component></footer-component>
        </template>
        <template slot="uploadImage">
          <upload-image></upload-image>
        </template>
      </meme-layout>
  </div>
</template>

<script>

  import {mapState,mapMutations,mapGetters} from 'vuex'

  import MemeLayout from '@/components/MemeLayout'
  import ImageList from '@/components/ImageList'
  import HeaderComponent from '@/components/Headercomponent'
  import FooterComponent from '@/components/Footercomponent'
  import CanvasComponent from '@/components/CanvasComponent'
  import Controls from "@/components/Controls";
  import UploadImage from "@/components/UploadImage";

export default {
  name: 'app',
  components: {
    MemeLayout, ImageList, HeaderComponent, FooterComponent, CanvasComponent, Controls, UploadImage
    },
    data() {
      return {
        output: null,
        path: '../images/'
      }
    },
    computed:{
      ...mapState(['images','index']),
      ...mapGetters('images', ['getImage']),
    },
    methods:{
      nextImage : function(event){
        let canvas = this.$refs.canvas.canvas;
        let ctx = this.$refs.canvas.ctx;

        let img = new Image();
        let index = this.$store.state.index;

        img.src = this.path + this.$store.state.images[index].name;

        this.$store.state.index = (index +1) %  this.$store.state.images.length;

        this.$refs.canvas.drawImage(img);
      },
      setImage : function(img){
        let canvas = this.$refs.canvas.canvas;
        let ctx = this.$refs.canvas.ctx;
        console.log(img);
        //this.$refs.canvas.drawImage(img);
      }
  },
  mounted() {
      this.$store.dispatch('fetchImages')
  }
}



</script>



<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:50px;
  color:red;
  background-color: #a3b8a0;
}


</style>
