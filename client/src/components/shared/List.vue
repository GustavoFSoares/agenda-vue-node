<template>
    <div>
        <input type="search" class="filter" @input="filter = $event.target.value" placeholder="Nome:"/>
        <table width="100%">
            <thead>
                <tr>
                    <td>Nome</td>
                    <td>E-mail</td>
                    <td>Tel-1</td>
                    <td>Tel-2</td>
                    <td>Data Criação</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(contact, index) in searchList" :key="index">
                    <td>{{ contact.name }}</td>
                    <td>{{ contact.email }}</td>
                    <td>{{ contact.tel1 }}</td>
                    <td>{{ contact.tel2 }}</td>
                    <td>{{ contact.createdAt }}</td>
                    <td> <router-link :to='`/edit/${contact._id}`' tag="button"> Editar </router-link> </td>
                    <td> <button @click="remove(contact._id, index)"> Excluir </button> </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
import { getContacts, deleteContact } from "@/services/contacts"
export default {

    data() {
        return {
            contacts: [ ],
            filter: '',
        }
    },
    mounted() {
        getContacts().then(res => { this.contacts = res.contacts })
    },
    methods: {
        remove(id, index) {
            deleteContact(id).then(res => {
                this.contacts.splice(index, 1)
            })
        }
    },
     computed: {
        searchList() {
            if(this.filter) {
                let exp = new RegExp(this.filter.trim(), 'i')
                return this.contacts.filter(contacts => exp.test(contacts.name))
            } else {
                return this.contacts
            }
        }
    },

}
</script>

<style scoped>
    .filter {
        display: block;
        width: 100%
    }
</style>


