<template>
    <div>

        <div class="form-group form-row col">
            <input type="search" class="filter form-control" @input="filter = $event.target.value" placeholder="Nome:"/>
        </div>

        <div class="form-group col">
            <table class="table" width="100%">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Tel-1</th>
                    <th scope="col">Tel-2</th>
                    <th scope="col">Data Criação</th>
                    <th scope="col"></th>
                    <!-- <td></td> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="(contact, index) in searchList" :key="index">
                    <td>{{ contact.name }}</td>
                    <td>{{ contact.email }}</td>
                    <td>{{ contact.tel1 }}</td>
                    <td>{{ contact.tel2 }}</td>
                    <td>{{ contact.createdAt }}</td>
                    <td> 
                        <router-link class="btn btn-outline-success" :to='`/edit/${contact._id}`' tag="button"> Editar </router-link> 
                        <button class="btn btn-outline-danger" @click="remove(contact._id, index)"> Excluir </button> 
                    </td>
                    <!-- <td></td> -->
                </tr>
            </tbody>

        </table>
        </div>
        
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


