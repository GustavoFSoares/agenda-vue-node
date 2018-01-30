<template>
    <div>
        <h1 name="titulo">{{ titulo }}</h1>

        <list/>
    </div>
</template>

<script>
import List from './List.vue'
export default {

    data() {
        return {
            titulo: "Agenda de Contatos",
        }
    },
    components: {
        'list': List,
    },

}
</script>

<style scoped>

</style>


