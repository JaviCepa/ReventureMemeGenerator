<template>
    <div class="columns" id="controls">
        <div class="column">
            <b-button @click="exportImage">Export Image</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Controls",
        methods: {
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