<template>
    <h1>edit screen</h1>
</template>

<script>
import { getContact } from "../services/contacts"
export default {
    data(){
        return {
            contact: [ ],
        }
    },
    mounted () {
        getContact(this.$route.params.id).then(res => { console.log(res) })
    },
    methods: {

    }
}
</script>

<style scoped>

</style>


