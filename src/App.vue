<template>
  <div id="app">
    <div>
      <meme-layout>
        <template slot="header">
          <header-template></header-template>
        </template>
        <template slot="canvasComponent">
          <canvas-component></canvas-component>
        </template>
        <template slot="footer">
          <footer-template></footer-template>
        </template>
      </meme-layout>
    </div>
  </div>
</template>

<script>

  import MemeLayout from '@/components/MemeLayout'
  import ImageList from '@/components/ImageList'
  import HeaderTemplate from '@/components/Header'
  import FooterTemplate from "@/components/Footer"
  import CanvasComponent from "@/components/CanvasComponent";

export default {
  name: 'app',
  components: {
    MemeLayout,ImageList, HeaderTemplate, FooterTemplate, CanvasComponent
    },
    data() {
      return {
        output: null
      }
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
  margin:auto;
  margin-top:30px;
}


</style>
