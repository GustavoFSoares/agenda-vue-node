<template>
    <div>
        <listagem/>
    </div>
</template>

<script>
import Listagem from '../listagem/Listagem.vue'
export default {
    components: {
        'listagem': Listagem,
        'contacts': [ ],
    },
    created() {
        this.$http.get('http://localhost:8081/contact/')
            .then(res => {
                res.json().then(contacts => {
                    this.contacts = contacts
                    console.log(contacts);
                }, err => {
                    console.log(err);
                })
            })
    }
}
</script>

<style scoped>

</style>


