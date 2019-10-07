<template>
    <div class="column is-narrow">
        <b-field class="file">
            <b-upload
                    class="file"
                    v-model="file"
                    :state="Boolean(file)"
                    accept="image/*"
                    drag-drop
                    @input="updateImage"
            >
                <a class="button is-primary">
                    <span>Click to upload</span>
                </a>
            </b-upload>
        </b-field>
    </div>
</template>

<script>

    import {mapState,mapMutations} from 'vuex'

    export default {
        name: "UploadImage",
        data() {
            return {
                file: null,
            }
        },
        computed: {
            ...mapState(['images','index']),
        },
        methods: {
            updateImage(){
                this.setUploadImage(URL.createObjectURL(this.file));
                this.$emit('imageUpload');
            },
            ...mapMutations({
                setUploadImage: 'setUploadImage'
            })
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
    .file{
        padding:0px;
        margin:0px;
    }

</style>