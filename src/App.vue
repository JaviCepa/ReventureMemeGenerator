<template>
  <div id="app" class="columns">
    <div class="column buttonColumn alignRight">
      <img src='/images/icon/previous-page.png' @click="previousImage" />
    </div>
      <meme-layout class="column">
        <template slot="controls">
          <controls
              @exportimageevent="exportImage"
          ></controls>
        </template>
        <template slot="headercontent">
          <header-component ref="headercomponent"></header-component>
        </template>
        <template slot="canvasComponent">
          <canvas-component ref="canvas" @imageUpload="imageupload"></canvas-component>
        </template>
        <template slot="footercontent">
          <footer-component ref="footercomponent"></footer-component>
        </template>
      </meme-layout>
    <div class="column buttonColumn alignLeft">
      <img src='/images/icon/next-page.png' @click="nextImage" />
    </div>
    <!--<img :src="img">-->
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
      ...mapState({images: 'images', Index: 'index', uploadImage: 'uploadImage'}),
      ...mapGetters(['getImage','getIndex']),
      img(){
        return this.uploadImage;
      }
    },
    methods:{
      nextImage: function(){
        this.increment();

        let img = new Image();
        img.src = this.path + this.getImage.name;

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
        let header = this.$refs.headercomponent;
        let footer = this.$refs.footercomponent;

        canvas.exportImage(header.title,header.final,footer.msg);
      },
      imageupload() {
        const img = new Image();
        img.src = this.uploadImage;
        this.setImage(img)
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
  font-family: "8bitoperator JVE Regular",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:50px;
  color:red;
  background-color: #a3b8a0;
}
  .buttonColumn{
    margin:auto;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
      }
  .alignRight{
    text-align: right;
  }
  .alignLeft{
  text-align: left;
}

</style>
