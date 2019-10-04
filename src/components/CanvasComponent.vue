<template>
    <div>
        <canvas id="canvas" width="1024" height="576">
        </canvas>
        <img id="canvasOutput" v-bind:src="imageLink" />
    </div>
</template>

<script>

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
            },
            drawTitleBox(title,final){
              this.ctx.fillStyle = this.color;
              this.ctx.fillRect(0,0,this.canvas.width,100);
            },
            drawFooterBox: function (text) {
                this.ctx.fillStyle = this.color;
                this.ctx.fillRect(0, (this.canvas.height - 172), this.canvas.width, 172);

                let  fontSize = 22,
                    width = 950,
                    lines = [],
                    line = '',
                    lineTest = '',
                    words = text.split(' '),
                    lineSpacing = 20,
                    currentY = 0;

                    // Font Definition
                this.ctx.font = '20pt "8bitoperator JVE Regular"';
                this.ctx.fillStyle = "white";

                for (let i = 0, len = words.length; i < len; i++) {
                    lineTest = line + words[i] + ' ';

                    // Check total width of line or last word
                    if (this.ctx.measureText(lineTest).width > width) {
                        // Calculate the new height
                        currentY = (lines.length * (fontSize + fontSize));

                        // Record and reset the current line
                        console.debug(currentY)
                        lines.push({ text: line, height: currentY - lineSpacing });
                        line = words[i] + ' ';
                    } else {
                        line = lineTest;
                    }
                }

                // Catch last line in-case something is left over
                if (line.length > 0) {
                    currentY = lines.length * fontSize + fontSize;
                    lines.push({ text: line.trim(), height: currentY });
                }

                console.log(lines);

                // Visually output text
                for (let i = 0, len = lines.length; i < len; i++) {
                    this.ctx.fillText(lines[i].text, this.offset, this.initialFooterPoint + lines[i].height);
                }
            },
            exportImage: function(){
                this.drawTitleBox("Nombre del final","101");
                this.drawFooterBox("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ex pretium lacus maximus condimentumeu sit amet nibh. Nam luctus condimentum velit in vehicula. Vivamus rutrum diam sit amet arcu tempor, tempus tincidunt sem rutrum.");
                this.imageLink = this.canvas.toDataURL('image/png',1.0);
            }
        },
        computed:{

        },
        mounted() {
            this.canvas = document.getElementById('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.initialFooterPoint = (this.canvas.height - 110);
            const img = new Image();
            img.src = '../images/volcano.png';
            this.drawBackgroundImage(img,this.canvas,this.ctx)
        },
        data: function(){
            return {
                canvas: null,
                ctx : null,
                imageLink:null,
                color : "#222035",
                offset: 30,
                initialFooterPoint: null
            }

        }
    }
</script>

<style scoped>
    #canvasOutput{
        margin-top: 80px;
        border-top: 10px solid whitesmoke;
        padding-top: 15px;
    }
    @font-face {
        font-family:"8bitoperator JVE Regular";
        src:url("../assets/fonts/8bitoperator_jve.eot?") format("eot"),
        url("../assets/fonts/8bitoperator_jve.woff") format("woff"),
        url("../assets/fonts/8bitoperator_jve.ttf") format("truetype"),
        url("../assets/fonts/8bitoperator_jve.svg#8bitoperator-JVE") format("svg");
        font-weight:normal;
        font-style:normal;
    }
</style>