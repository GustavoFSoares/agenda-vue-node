<template>
    <div>
        <h1>{{ title }}</h1>

        <list/>
    </div>
</template>

<script>
import List from './List.vue'
export default {

    data() {
        return {
            title: "Agenda de Contatos",
        }
    },
    components: {
        'list': List,
    },

}
</script>

<style scoped>

</style>


