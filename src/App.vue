<template>
  <div id="app">
      <meme-layout>
        <template slot="controls">
          <controls
              @nextimageevent="nextImage"
              @previousimageevent="previousImage"
              @exportimageevent="exportImage"
          ></controls>
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
    <div id="filler"></div>
  </div>
</template>

<script>

  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

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
      ...mapGetters(['getImage','getIndex'])
    },
    methods:{
      nextImage: function(){
        this.increment();

        let img = new Image();
        img.src = this.path + this.getImage.name;//.name;

        this.setImage(img);
      },
      previousImage: function(){
        this.decrement();

        let img = new Image();
        img.src = this.path + this.getImage.name;

        this.setImage(img);
      },
      setImage(img){
        let canvas = this.$refs.canvas;
        canvas.drawImage(img);
      },
      exportImage(){
        let canvas = this.$refs.canvas;
        canvas.exportImage();
      },
      ...mapActions({
        fetch : 'fetchImages'
      })
      ,...mapMutations({
        increment: 'increment',
        decrement: 'decrement'
      })
  },
  mounted() {
      //
    this.fetch();
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
  #filler{
    background-color: #a3b8a0;
    height:1000px;
  }


</style>
