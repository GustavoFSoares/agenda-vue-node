<template>
    <div>
        <table width="100%">
            <tr>
                <td>Nome</td>
                <td>E-mail</td>
                <td>Tel-1</td>
                <td>Tel-2</td>
                <td>Created</td>
            </tr>
            <tr v-for="contact of contacts">
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
        }
    },
    mounted() {
        this.list()
    },
    methods: {
        list() {
            getContacts().then(res => { 
                this.contacts = res.contacts 
                console.log(res);
            })
        },
    },
}
</script>

<style scoped>

</style>


