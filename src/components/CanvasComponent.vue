<template>
    <div>
        <b-upload
                class="load"
                style="padding:0px; border:none;"
                v-model="file"
                :state="Boolean(file)"
                accept="image/*"
                drag-drop
                @input="updateImage"
        >
        <img id="hover_instruction" src='/images/hover_instruction.png' />
            <canvas id="canvas" width="1024" height="576">
            </canvas>
        </b-upload>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters} from 'vuex'

    export default {
        name: "CanvasComponent",
        computed: {
            ...mapState(['images','index','imageLinkRef']),
            ...mapGetters(['getImage'])
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

                this.ctx.font = '50pt "8bitoperator JVE Regular"';
                this.ctx.fillStyle = "white";

                this.ctx.fillText(title, 25 , 70 );

            },
            drawFinal: function (text){
                this.ctx.font = '26pt "8bitoperator JVE Regular"';
                this.ctx.fillStyle = "yellow";
                this.ctx.textAlign='right';

                this.ctx.fillText("Ending", this.canvas.width-27 , 42 );
                let fullText = "#" + text + " of 100";
                this.ctx.fillText(fullText, this.canvas.width-27 , 78 );
            },
            drawFooterBox: function (text) {
                this.ctx.fillStyle = this.color;
                this.ctx.fillRect(0, (this.canvas.height - 172), this.canvas.width, 172);

                let  fontSize = 22,
                    width = 950,
                    maxlines = 3,
                    lines = [],
                    line = '',
                    lineTest = '',
                    words = text.split(' '),
                    lineSpacing = 40,
                    currentLine = 0;

                    // Font Definition
                this.ctx.font = '28pt "8bitoperator JVE Regular"';
                this.ctx.fillStyle = "white";
                this.ctx.textAlign='start';

                for (let i = 0, len = words.length; i < len; i++) {
                    lineTest = line + words[i] + ' ';

                    // Check total width of line or last word
                    if (this.ctx.measureText(lineTest).width > width) {

                        if(currentLine < maxlines){
                            // Añadimos la line
                            lines.push({ text: line, height: lineSpacing * currentLine});
                            currentLine++;
                        }

                        // Reset Line
                        line = words[i] + ' ';
                    } else {
                        // Add LineTest to Line
                        line = lineTest;
                    }
                }


                // Catch last line in-case something is left over
                if (line.length > 0) {
                    if(currentLine < maxlines){
                        lines.push({ text: line.trim(), height: lineSpacing * currentLine });

                    }

                }

                // Visually output text
                for (let i = 0, len = lines.length; i < len; i++) {
                    let verticalOffset = this.initialFooterPoint + lines[i].height;
                    this.ctx.fillText(lines[i].text, this.offset, verticalOffset);
                }
            },
            updateImage(){
                this.setUploadImage(URL.createObjectURL(this.file));
                this.$emit('imageUpload');
            },
            drawWatermark(){
                let watermarkText = "https://reventurememegen.netlify.com/"
                this.ctx.font = '12pt "8bitoperator JVE Regular"';
                this.ctx.fillStyle = "grey";

                this.ctx.fillText(watermarkText, this.canvas.width - 260 , this.canvas.height -5  );
            },
            exportImage: function(title, final, text){
                this.drawTitleBox(title);
                this.drawFinal(final);
                this.drawFooterBox(text);
                this.drawWatermark();
                this.imageLink = this.canvas.toDataURL('image/png',1.0);
                this.setImageLink(this.imageLink);
            },
            ...mapMutations({
                setUploadImage: 'setUploadImage',
                setImageLink: 'setImageLink'
            })
        },
        mounted() {

            this.canvas = document.getElementById('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.initialFooterPoint = (this.canvas.height - 120);

            const img = new Image();
            img.src = "images/reventureImages/reventure1.png";
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
    .upload-draggable.is-primary{
        position: relative;
    }
    #hover_instruction{
        position: absolute;
        width: 100%;
        height: 95%;
        opacity: 0;
        transition: opacity .2s ease-out;
        -moz-transition: opacity .2s ease-out;
        -webkit-transition: opacity .2s ease-out;
        -o-transition: opacity .2s ease-out;
    }
    #hover_instruction:hover{
        opacity: 100;
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

</style>