<template>
    <div class="columns" id="controls">
        <div class="column is-one-third">
            <b-button @click="previousImage">Previous Image</b-button>
        </div>
        <div class="column is-one-third">
            <b-button @click="nextImage">Next Image</b-button>
        </div>
        <div class="column is-one-third">
            <b-button @click="exportImage">Export Image</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Controls",
        methods: {
            nextImage: function(){
                this.$emit('nextimageevent');
            },
            previousImage: function(){
                this.$emit('previousimageevent');
            },
            exportImage: function(){
                this.$emit('exportimageevent');
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