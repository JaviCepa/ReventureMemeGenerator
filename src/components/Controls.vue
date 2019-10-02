<template>
    <div class="columns" id="controls">
        <div class="column is-half">
            <b-button @click="previousImage">Previous Image</b-button>
        </div>
        <div class="column is-half">
            <b-button @click="nextImage">Next Image</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Controls",
        methods: {
            nextImage(){
               // $parent.nextImage();
                console.log("nextImage");
            },
            previousImage(){
                console.log("previousImage");
            }
        }
    }
</script>

<style scoped>
    #controls{
        margin:auto;
        text-align: center;
    }
</style>