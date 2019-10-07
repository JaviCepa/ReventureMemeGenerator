<template>
    <div class="columns">
        <div class="column" id="maintitle">
            <input maxlength="30" v-model="title"/>
        </div>
        <div class="column is-narrow" id="numeration">
            <p>Ending</p>
            <p>#<input style="display: inline;" maxlength="3" size="3" v-model="final" /> of 100</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderComponent",
        data(){
            return{
                title:  "The Meme Maker",
                final: "101"
            }
        }
    }
</script>

<style scoped>
    #maintitle input{
        font-size: 43pt;
        color:white;
        width: 100%;
        border: 2px solid yellow;
        border-style: dotted;
        border-radius: 5px;
        height: 75px;
        margin-top: 10px;
    }
    input{
        border: none;
        background:none;
    }
    input:focus{
        background-color: cornflowerblue;
    }
    #numeration input{
        color:yellow;
        text-align: right;
        border: 2px solid yellow;
        border-style: dotted;
        border-radius: 5px;
        padding: 5px;
        height: 40px;
        width: 45px;
    }

    #numeration{
        font-size: 20pt;
        color:yellow;
        padding:10px;
        padding-right: 40px;

    }
    #maintitle{
        margin-left:30px;
        margin-top: 10px;
        vertical-align: center;
        padding:0px;
        width:100px;
    }
    p {
        margin:0;
        text-align: right;
    }
</style>