<template>
    <div id="mainText">
        <b-form-textarea
                id="textarea"
                v-model="msg"
                rows="3"
                max-rows="3"
                no-resize
        ></b-form-textarea>
    </div>
</template>

<script>
    export default {
        name: "FooterComponent",
        data(){
            return{
                // Mirar el salto de linea -----  Ending #101 of 100
                msg:  "Tim decided to stop working and start procrastinating with meme generators. He became incredibly popular and retired from the hero business. \n(Click here to edit your own ending text)"
            }
        }
    }
</script>

<style scoped>
    #mainText{
        padding:0px;
    }
    #textarea{
        border: 2px solid yellow;
        border-style: dotted;
        background:none;
        padding: 10px;
        resize:none;
        color: white;
        font-size: 20pt;
        height: 150px;
        margin-top: 10px;
    }
    #textarea:focus{
        border: none;
        background-color: cornflowerblue;
    }
</style>