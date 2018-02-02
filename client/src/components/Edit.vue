<template>
    <div>
        <h1>{{ title }}</h1>
        <div class="form-group">
            <label>Nome</label>
            <input name="" type="text" v-model="contact.name">

            <label for="">E-mail</label>
            <input type="text" v-model="contact.email">

            <label for="">Tel-1</label>
            <input type="text" v-model="contact.tel1">

            <label for="">Tel-2</label>
            <input type="text" v-model="contact.tel2">

            <button class="btn btn-outline-success" @click="save(contact)">Editar</button>
        </div>
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


