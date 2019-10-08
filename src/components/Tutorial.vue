<template>
    <div class="tutorial">
        <h1> How To Use</h1>
        <ol>
            <li>Select an image using the arrows. You can also click or drop on the canvas to upload your own</li>
            <li>Fill in the text inputs</li>
            <li>Use the big button to save the meme</li>
        </ol>
    </div>

</template>

<script>
    export default {
        name: "Tutorial"
    }
</script>

<style scoped>
    li{
        font-size: 18pt;
    }
    .tutorial{
        margin-top: 60px;
        background-color: rgba(30, 40, 60, 0.79);
        border: 1px solid yellow;
        border-radius: 10px;
        padding: 30px;
        padding-left: 75px;
        padding-bottom: 45px;
        color:white;
        margin-bottom: 90px;

    }

    .tutorial h1{
        color: rgb(245, 255, 163);
    }
</style>