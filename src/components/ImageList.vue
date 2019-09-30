<template>
    <div v-if="images.length">
        <p>Dentro de Images {{ images.length }}</p>
    </div>
    <b-alert v-else show variant="info">No Images found</b-alert>
</template>

<script>
    import { mapActions, mapMutations, mapState } from 'vuex'

    export default {
        name: "ImageList",
        mounted(){
            this.fetchImages()
        },
        computed:{
            ...mapState('images',['images'])
        },
        methods : {
            ...mapActions('images',['fetchImages'])
        }
    }
</script>