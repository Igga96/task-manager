<template>
  <div class="tasks__container">
    <button class="add-task-btn" @click="showForm = !showForm">{{ showForm ? '-' : '+' }}</button>
    <vForm v-if="showForm" />
    <vTaskList :tasks="tasks" />
  </div>
</template>

<script>
import vForm from '../components/v-form-tasks.vue'
import vTaskList from '../components/v-tasks-list.vue'
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  components: {
    vForm, vTaskList
  },
  setup() {
    const store = useStore();
    const showForm = ref(false);
    const tasks = computed(() => store.getters.tasks);

    return { showForm, tasks };
  },
};

</script>


<style lang="scss">
.tasks__container {
  width: 100%;
  padding: 20px;


  .add-task-btn {
    background: rgb(53, 53, 53);
    border: none;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    font-size: 24px;
    cursor: pointer;
    &:hover{
      background: rgba(53, 53, 53, 0.801);
    }
  }
}

</style>