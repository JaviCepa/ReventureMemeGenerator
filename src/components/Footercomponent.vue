<template>
    <div id="mainText">
        <textarea
                id="textarea"s
                type="textarea"
                v-model="msg"
                maxlength="240"
                rows="3"
        >
        </textarea>
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
        text-align: center;
    }
    #textarea{
        border: 2px solid yellow;
        border-style: dotted;
        background: transparent;
        padding: 15px;
        overflow:hidden;
        resize:none;
        color: white;
        font-size: 20pt;
        height: 125px;
        margin-top:20px;
        width:95%;
        font-family: "8bitoperator JVE Regular",sans-serif;
    }
    #textarea:focus{
        border: none;
        background-color: cornflowerblue;
    }
</style>