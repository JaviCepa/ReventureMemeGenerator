<template>
    <div v-if="images.length">
        <p>Dentro de Images {{ images.length }}</p>
        <img v-for="img in images" :src="path + img.name" />
    </div>
    <b-alert v-else show variant="info">No Images found</b-alert>
</template>

<script>
    import { mapActions, mapState } from 'vuex'

    export default {
        name: "ImageList",
        mounted(){
            this.fetchImages()
        },
        computed:{
            ...mapState(['images'])
        },
        methods : {
            ...mapActions(['fetchImages'])
        },
        data(){
            return{
                path: '../images/'
            }
        }
    }
</script>