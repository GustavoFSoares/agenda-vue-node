<template>
    <div>
        <h1>{{ title }}</h1>

        <h1 class="alert">Em Desenvolvimento!</h1>
    </div>

</template>

<script>
export default {
    data(){
        return {
            title: "Resume"
        }
    }
}
</script>

<style scoped>
    .alert {
        top: 220px;
        font-size: 70px;
    }
</style>

