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
                msg:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex pretium lacus maximus condimentumeu sit amet nibh. Nam luctus condimentum velit in vehicula. Vivamus rutrum diam sit amet arcu tempor, tempus tincidunt sem rutrum."
            }
        }
    }
</script>

<style scoped>
    #mainText{
        padding:0px;
    }
    #textarea{
        border: none;
        background:none;
        padding: 10px;
        resize:none;
        color: white;
        font-size: 20pt;
    }
    #textarea:focus{
        border: none;
    }
</style>