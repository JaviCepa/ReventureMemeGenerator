<template>
    <div>
        <canvas id="canvas" width="1024" height="476">
        </canvas>
    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'

    export default {
        name: "CanvasComponent",
        methods: {
            drawBackgroundImage: function (img,canvas,ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                img.onload = function () {
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                }
            },
            drawImage: function(img){
                this.drawBackgroundImage(img,this.canvas,this.ctx);
            }
        },
        mounted() {
            this.canvas = document.getElementById('canvas');
            this.ctx = this.canvas.getContext('2d');
            const img = new Image();
            img.src = '../images/volcano.png';
            this.drawBackgroundImage(img,this.canvas,this.ctx)
        },
        data: function(){
            return {
                canvas: null,
                ctx : null
            }

        }
    }
</script>

<style scoped>
</style>