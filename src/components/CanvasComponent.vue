<template>
    <div>
        <b-upload
                class="load"
                v-model="file"
                :state="Boolean(file)"
                accept="image/*"
                drag-drop
                @input="updateImage"
        >
            <canvas id="canvas" width="1024" height="576">
            </canvas>
        </b-upload>
        <!--<img id="canvasOutput" v-bind:src="imageLink" />-->
    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'

    export default {
        name: "CanvasComponent",
        computed: {
            ...mapState(['images','index']),
        },
        methods: {
            drawBackgroundImage: function (img,canvas,ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                img.onload = function () {
                    let ratio = img.height/img.width;
                    let offset = canvas.height/2-canvas.width*ratio/2;
                    ctx.drawImage(img, 0, offset, canvas.width, canvas.width*ratio);
                }
            },
            drawImage: function(img){
                this.drawBackgroundImage(img,this.canvas,this.ctx);
            },
            drawTitleBox(title){
              this.ctx.fillStyle = this.color;
              this.ctx.fillRect(0,0,this.canvas.width,100);

                this.ctx.font = '43pt "8bitoperator JVE Regular"';
                this.ctx.fillStyle = "white";

                this.ctx.fillText(title, 25 , 60 );

            },
            drawFinal: function (text){
                this.ctx.font = '20pt "8bitoperator JVE Regular"';
                this.ctx.fillStyle = "yellow";
                this.ctx.textAlign='right';

                this.ctx.fillText("Ending", this.canvas.width-50 , 35 );
                let fullText = "#" + text + " of 100";
                this.ctx.fillText(fullText, this.canvas.width-50 , 70 );
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
                this.ctx.textAlign='start';

                for (let i = 0, len = words.length; i < len; i++) {
                    lineTest = line + words[i] + ' ';

                    // Check total width of line or last word
                    if (this.ctx.measureText(lineTest).width > width) {
                        // Calculate the new height
                        currentY = (lines.length * (fontSize + fontSize));

                        // Record and reset the current line
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

                // Visually output text
                for (let i = 0, len = lines.length; i < len; i++) {
                    this.ctx.fillText(lines[i].text, this.offset, this.initialFooterPoint + lines[i].height);
                }
            },
            updateImage(){
                this.setUploadImage(URL.createObjectURL(this.file));
                this.$emit('imageUpload');
            },
            exportImage: function(title, final, text){
                this.drawTitleBox(title);
                this.drawFinal(final);
                this.drawFooterBox(text);
                this.imageLink = this.canvas.toDataURL('image/png',1.0);
            },
            ...mapMutations({
                setUploadImage: 'setUploadImage'
            })
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
                file: null,
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
    @font-face {
        font-family:"8bitoperator JVE Regular";
        src:url("../assets/fonts/8bitoperator_jve.eot?") format("eot"),
        url("../assets/fonts/8bitoperator_jve.woff") format("woff"),
        url("../assets/fonts/8bitoperator_jve.ttf") format("truetype"),
        url("../assets/fonts/8bitoperator_jve.svg#8bitoperator-JVE") format("svg");
        font-weight:normal;
        font-style:normal;
    }
    .load{
        padding:0px;
        border:none;
    }
    #canvas{
        padding:0px;
    }
    b-upload{
        padding:0px;
        margin:0px;
    }
    .upload-draggable{
        border: 10px solid red;
    }

</style>