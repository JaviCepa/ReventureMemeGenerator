<template>
    <div class="columns" id="uploadImage">
        <div class="column">
            <b-button @click="uploadImage">Upload Image</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "uploadimage",
        methods:{
            uploadImage(){
                console.log("upload Image");
            }
        }
    }
</script>

<style scoped>
    #uploadImage{
        text-align: center;
    }
</style>