<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <div>
            <div class="row">
                <div class="col">
                    <div class="form-group row ">
                        <label class="col-sm-2 col-form-label">Nome: </label>
                        <div class="col-md">
                            <input class="form-control" name="" type="text" v-model="contact.name">    
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label" for="">E-mail: </label>
                        <div class="col-md">
                            <input class="form-control" type="text" v-model="contact.email">                
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label" for="">Tel-1: </label>
                        <div class="col-md">
                            <input class="form-control" type="text" v-model="contact.tel1">                
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label" for="">Tel-2: </label>
                        <div class="col-md">
                            <input class="form-control" type="text" v-model="contact.tel2">                
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label" for="">URL: </label>
                        <div class="col-md">
                            <input class="form-control" type="text" v-model.lazy="contact.url">
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="form-group">
                        <img v-show="contact.url" class="img-fluid img-thumbnail" :src="contact.url" alt="gatinho" height="720" width="480">
                    </div>
                </div>
            </div>
        </div>
        
        
        <button class="btn btn-outline-success" @click="save(contact)">Save</button>
        <!-- <button class="btn btn-outline-primary" @click="save(contact)">Save</button> -->
    </div>
</template>

<script>
import { addContact } from "../services/contacts";
export default {
    
    data() {
        return {
            title: "Cadastrar Contato",
            contact: { }
        }
    },
    methods: {
        save(contact){
            addContact(contact).then(res => {
                this.$router.push({ path: '/' })
            })
        }
    }
    
}
</script>

<style scoped>

</style>

