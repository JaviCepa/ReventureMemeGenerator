<template>
  <div id="app" class="columns">
    <div class="column buttonColumn alignRight">
      <a class="buttonPrevious" @click="previousImage" />
    </div>
      <meme-layout class="column">
        <template slot="headercontent">
          <header-component ref="headercomponent"></header-component>
        </template>
        <template slot="canvasComponent">
          <canvas-component ref="canvas" @imageUpload="imageupload"></canvas-component>
        </template>
        <template slot="footercontent">
          <footer-component ref="footercomponent"></footer-component>
        </template>
        <template slot="controls">
          <controls
                  @exportimageevent="exportImage"
          ></controls>
        </template>
        <template slot="tuto">
          <tutorial></tutorial>
        </template>
      </meme-layout>
    <div class="column buttonColumn alignLeft">
      <a class="buttonNext"  @click="nextImage" />
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
  import Tutorial from "@/components/Tutorial"

export default {
  name: 'app',
  components: {
    MemeLayout, ImageList, HeaderComponent, FooterComponent, CanvasComponent, Controls, UploadImage, Tutorial
    },
    data() {
      return {
        output: null,
        path: '../images/'
      }
    },
    computed:{
      ...mapState({images: 'images', Index: 'index', uploadImage: 'uploadImage'}),
      ...mapGetters(['getImage','getIndex'])
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
      setNextImage: function(){
        let img = new Image();
        img.src = this.getImage.name;
        this.setImage(img);
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
}

  .column{
    text-align: center;
  }
  .buttonColumn{
    /*margin:auto;*/
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    margin-top: 250px;

      }
  .alignRight{
    text-align: right;

  }
  .alignLeft{
    text-align: left;
  }


  .buttonNext{
    background-image: url('/images/icon/next-page.png');
    height: 64px;
    width: 64px;
  }
  .buttonNext:hover{
    background-image: url("/images/icon/next-page-hover.png");
  }

  .buttonPrevious{
    background-image: url('/images/icon/previous-page.png');
    height: 64px;
    width: 64px;
    margin: auto;
    text-align: right;
    margin-right: 0px;
  }

  .buttonPrevious:hover{
    background-image: url("/images/icon/previous-page-hover.png");
  }

  .buttonNext, .buttonPrevious{
    display:block;
  }

</style>
