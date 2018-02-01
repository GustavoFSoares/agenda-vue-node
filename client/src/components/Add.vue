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

            <button @click="save(contact)">Save</button>
        </div>
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

