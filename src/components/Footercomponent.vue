<template>
    <div id="mainText">
        <textarea v-model="msg" id="text" class="column is-narrow" />
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data(){
            return{
                msg:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex pretium lacus maximus condimentumeu sit amet nibh. Nam luctus condimentum velit in vehicula. Vivamus rutrum diam sit amet arcu tempor, tempus tincidunt sem rutrum."
            }
        }
    }
</script>

<style scoped>
    #mainText{
        padding:10px;
    }
    #text{
        color: white;
        font-size: 15pt;
    }
    textarea{
        border: none;
        background:none;
        padding: 10px;
        width:100%;
        height:172px;
    }
</style>