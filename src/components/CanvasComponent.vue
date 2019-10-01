<template>
    <div>
        <canvas id="canvas" width="1024" height="476">
        </canvas>
    </div>
</template>

<script>
    export default {
        name: "CanvasComponent",
        methods: {
            drawBackgroundImage: function(ctx, canvas,img) {
                var canvas = document.getElementById('canvas')
                var ctx = canvas.getContext('2d')
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                img.src = '../images/volcano.png';
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
        },
        mounted() {
            var img = new Image();
            //this.trackTransforms()
            var canvas = document.getElementById('canvas')
            var ctx = canvas.getContext('2d')
            this.drawBackgroundImage(ctx,canvas,img)
            //this.initializeFunctions()
        }
    }
</script>

<style scoped>
    canvas{
        background:red;
    }
</style>