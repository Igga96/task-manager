<template>
    <vHeader/>
    <div class="container">
        <vAside/>
        <vTasksList/>
    </div>
</template>
<script>
import vHeader from "../components/v-header.vue";
import vAside from "../components/v-aside.vue";
import vTasksList from "../components/v-tasks-container.vue";
export default {
    components: {
        vHeader, vAside, vTasksList
    }
}
</script>
<style lang="scss">
.container{
    display: flex;
}
</style>