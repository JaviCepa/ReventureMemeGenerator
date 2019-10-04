<template>
    <div class="columns">
        <div class="column" id="maintitle">
            <input maxlength="30" v-model="title"/>
        </div>
        <div class="column is-narrow" id="numeration">
            <p>Final</p>
            <p>Nº<input style="display: inline;" maxlength="3" size="3" v-model="final" /> de 100</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderComponent",
        data(){
            return{
                title:  "Titulo",
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
    }
    input{
        border: none;
        background:none;
    }
    #numeration input{
        color:yellow;
        text-align: right;
    }

    #numeration{
        font-size: 20pt;
        color:yellow;
        padding:0px;
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