<template>
    <div>
        <h1>{{ title }}</h1>
        <div class="form-group row">
            <div class="col-5">
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Nome: </label>
                    <input class="col-sm-10 form-control" name="" type="text" v-model="contact.name">    
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label" for="">E-mail: </label>
                    <input class="col-sm-10 form-control" type="text" v-model="contact.email">                
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label" for="">Tel-1: </label>
                    <input class="col-sm-10 form-control" type="text" v-model="contact.tel1">                
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label" for="">Tel-2: </label>
                    <input class="col-sm-10 form-control" type="text" v-model="contact.tel2">                
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label" for="">URL: </label>
                    <input class="col-sm-10 form-control" type="text" v-model.lazy="contact.url">
                </div>
            </div>

            <div class="col-7">
                <div class="form-group">
                    <img v-show="contact.url" class="img-fluid img-thumbnail" :src="contact.url" alt="gatinho" height="720" width="480">
                </div>
            </div>
        </div>
        
        <button class="btn btn-outline-success" @click="save(contact)">Edit</button>
    </div>
</template>

<script>
import { getContact, editContact } from "../services/contacts"
export default {
    
    data() {
        return {
            title: "Editar Contato",
            contact: { },
        }
    },
    mounted() {
        let id = this.$route.params.id
        getContact(id).then(res => { this.contact = res.contact })
    },
    methods: {
        save(contact) {
            let id = this.$route.params.id
            editContact(id, contact).then(res => {
                this.$router.push({ path: '/' })
            })
            
        }
    },

}
</script>

<style scoped>

</style>


