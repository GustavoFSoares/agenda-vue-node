<template>
    <div>
        <h1>{{ title }}</h1>

        <span>Nome: {{ contact.name }} </span>
        <span>E-mail: {{ contact.email }} </span>
        <span>Tel-1: {{ contact.tel1 }} </span>
        <span>Tel-2: {{ contact.tel2 }} </span>
        <span>Criação: {{ contact.createdAt }} </span>
    </div>
</template>

<script>
import { getContact } from "../services/contacts"
export default {
    
    data(){
        return {
            title: "Editar Contato",
            contact: [ ],
        }
    },
    mounted () {
        getContact(this.$route.params.id).then(res => { this.contact = res.contact })
    },
    methods: {

    },

}
</script>

<style scoped>

</style>


