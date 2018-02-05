<template>
    <div>
        <h1>{{ title }}</h1>

        <list/>
    </div>
</template>

<script>
import List from '@/components/shared/List.vue'
export default {

    data() {
        return {
            title: "Agenda de Contatos",
            message: this.$route.params.message
        }
    },
    components: {
        'list': List,
    },
    mounted() {
        
    }

}
</script>

<style scoped>

</style>


