<template>
    <div class="container" id="main">
        <div class="container" id="header">
            <slot name="header"></slot>
        </div>
        <div class="container" id="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style>
    @font-face {
        font-family: bitoperator;
        src: url('../assets/fonts/8bitoperator.ttf') format('ttf');
    }
    #main{
        background: #b13a40;
        height: 576px;
        padding:0px;
        width:1024px;
        font-family: bitoperator;
    }
    #header{
        background: #222035;
        height:86px;
        position:relative;
        color:aliceblue;
    }
    #footer{
        background: #222035;
        height:172px;
        position: absolute;
        bottom: 0px;
        vertical-align: bottom;
        color:aliceblue;

    }

</style>