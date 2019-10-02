<template>
    <div class="columns">
        <div class="column" id="maintitle">
            <input v-model="title"/>
        </div>
        <div class="column is-narrow" id="numeration">
            <p>Final</p>
            <input v-model="final" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Headercomponent",
        data(){
            return{
                title:  "Titulo",
                final: "Nº101 de 100"
            }
        }
    }
</script>

<style scoped>
    #maintitle input{
        font-size: 43pt;
        color:white;
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

    }
    #maintitle{
        margin-left:5px;
        padding:0px;
    }
    p {
        margin:0;
        text-align: right;
    }
</style>