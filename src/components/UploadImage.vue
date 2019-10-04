<template>
    <div class="column is-narrow">
        <b-field class="file">
            <b-upload
                    v-model="file"
                    drag-drop
                    @input="updateImage()"
            >
                <a class="button is-primary">
                    <span>Click to upload</span>
                </a>
            </b-upload>
        </b-field>
    </div>
</template>

<script>
    export default {
        name: "UploadImage",
        data() {
            return {
                file: null,
            }
        },
        methods: {
            updateImage(){
                //this.$parent.setImage(file);
                //if(file)
                //console.log("updateImagen imagen: ",this.file );
            }
        }
    }
</script>

<style scoped>
    .custom-file-input:lang(en) ~ .custom-file-label::after {
        content: 'Carga';
    }
    .column{
        color:white;
        padding-left: 100px;
    }

</style>