<template>
    <div>
        <input type="search" class="filter" @input="filter = $event.target.value" placeholder="Nome"/>
        <table width="100%">
            <tr>
                <td>Nome</td>
                <td>E-mail</td>
                <td>Tel-1</td>
                <td>Tel-2</td>
                <td>Created</td>
            </tr>
            <tr v-for="contact of searchList">
                <td>{{ contact.name }}</td>
                <td>{{ contact.email }}</td>
                <td>{{ contact.tel1 }}</td>
                <td>{{ contact.tel2 }}</td>
                <td>{{ contact.createdAt }}</td>
            </tr>

        </table>
    </div>
</template>

<script>
import { getContacts } from "../services/contacts"
export default {

    data() {
        return {
            contacts: [ ],
            filter: '',
        }
    },
    mounted() {
        this.list()
    },
    methods: {
        list() {
            getContacts().then(res => { 
                this.contacts = res.contacts 
            })
        },
    },
     computed: {
        searchList() {
            if(this.filter) {
                let exp = new RegExp(this.filter.trim(), 'i')
                return this.contacts.filter(contacts => exp.test(contacts.email))
            } else {
                return this.contacts
            }
        }
    }
}
</script>

<style scoped>
    .filter {
        display: block;
        width: 100%
    }
</style>


