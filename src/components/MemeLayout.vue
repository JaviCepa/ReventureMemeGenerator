<template>
    <div>
        <div class="container" id="controls">
            <slot name="controls"></slot>
        </div>
        <div class="container hero-body" id="main">
            <div class="hero-head container" id="headercontent">
                <slot name="headercontent"></slot>
            </div>
            <div class="image">
                <slot name="canvasComponent"></slot>
            </div>
            <div class="hero-foot container" id="footercontent">
                <slot name="footercontent"></slot>
            </div>
        </div>
        <div class="container" id="uploadImage">
            <slot name="uploadImage"></slot>
        </div>
    </div>
</template>
<script>
    export default{
        name:'MemeLayout',
    }


</script>


<style type="text/css" media="screen, print">
    @font-face {
        font-family:"8bitoperator JVE Regular";
        src:url("../assets/fonts/8bitoperator_jve.eot?") format("eot"),
            url("../assets/fonts/8bitoperator_jve.woff") format("woff"),
            url("../assets/fonts/8bitoperator_jve.ttf") format("truetype"),
            url("../assets/fonts/8bitoperator_jve.svg#8bitoperator-JVE") format("svg");
        font-weight:normal;
        font-style:normal;
    }
    .image{
        z-index: 1;
    }
    #main{
        background: yellowgreen;
        height: 576px;
        padding:0px;
        width:1024px;
        font-family: "8bitoperator JVE Regular",serif;
    }
    #headercontent{
        background: #222035;
        height:100px;
        position:absolute;
        color:aliceblue;
        vertical-align:top;
        z-index: 3;
        padding:5px;

    }
    #footercontent{
        background: #222035;
        height:172px;
        position: absolute;
        bottom: 0px;
        vertical-align: bottom;
        color:aliceblue;
        z-index: 3;

    }

</style>