<template>
    <div class="columns" id="controls">
        <div class="column">
            <!--<a class="blue" @click="exportImage" target="" :href="this.imageLinkRef">Export Image</a>-->
            <a class="blue" @click="exportImage" :href="this.imageLinkRef" :download="downloadName">Export Image</a>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Controls",
        methods: {
            exportImage: function(){
                this.$emit('exportimageevent');
                //window.open(this.imageLinkRef);
            }
        },
        computed:{
            ...mapState(['images','imageLinkRef','title']),
            downloadName: function(){
                return this.title + ".jpg"
            }
        }
    }
</script>

<style scoped>
    #controls{
        margin:auto;
        text-align: center;
    }

    .blue {
        font-weight: bold;
        color: #f1f1f1;
        text-shadow: -1px -1px 0 #2C7982;
        background: #3EACBA;
        border: 1px solid #379AA4;
        padding:10px;
        padding-right: 100px;
        padding-left: 100px;
        background-image: -webkit-linear-gradient(top, #48C6D4, #3EACBA);
        background-image: -moz-linear-gradient(top, #48C6D4, #3EACBA);
        background-image: -ms-linear-gradient(top, #48C6D4, #3EACBA);
        background-image: -o-linear-gradient(top, #48C6D4, #3EACBA);
        background-image: linear-gradient(top, #48C6D4, #3EACBA);
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset, 0 -1px 0 rgba(255, 255, 255, .1) inset, 0 4px 0 #338A94, 0 4px 2px rgba(0, 0, 0, .5);
        -moz-box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset, 0 -1px 0 rgba(255, 255, 255, .1) inset, 0 4px 0 #338A94, 0 4px 2px rgba(0, 0, 0, .5);
        box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset, 0 -1px 0 rgba(255, 255, 255, .1) inset, 0 4px 0 #338A94, 0 4px 2px rgba(0, 0, 0, .5);
        width:600px;
        height:100px;
        margin-top: 30px;
    }

    .blue:hover {
        background: #48C6D4;
        color: #bfbfbf;
        background-image: -webkit-linear-gradient(top, #3EACBA, #48C6D4);
        background-image: -moz-linear-gradient(top, #3EACBA, #48C6D4);
        background-image: -ms-linear-gradient(top, #3EACBA, #48C6D4);
        background-image: -o-linear-gradient(top, #3EACBA, #48C6D4);
        background-image: linear-gradient(top, #3EACBA, #48C6D4);
    }

</style>