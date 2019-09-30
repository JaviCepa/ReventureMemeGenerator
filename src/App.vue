<template>
  <div id="app">
    <meme-layout>
      <template slot="header">
        <header></header>
      </template>
      <template slot="footer">
        <footer></footer>
      </template>
    </meme-layout>
    <image-list></image-list>
  </div>
</template>

<script>

  import MemeLayout from '@/components/MemeLayout'
  import ImageList from '@/components/ImageList'
  import Header from '@/components/Header'
  import Footer from "@/components/Footer"

export default {
  name: 'app',
  components: {
    MemeLayout,ImageList,Header, Footer
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:50px;
  margin:auto;
  margin-top:30px;

}


</style>
