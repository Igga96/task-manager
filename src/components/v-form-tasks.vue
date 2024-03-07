<template>
  <form class="form" @submit.prevent="addTask">
    <input class="form__input" v-model="newTask" placeholder="Добавьте новую задачу" />
    <button class="form__add-btn" type="submit">Добавить</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const newTask = ref('');

    const addTask = () => {
      if (!newTask.value.trim()) return;
      const task = {
        id: Date.now(),
        text: newTask.value,
        completed: false,
      };
      store.dispatch('addTask', task);
      newTask.value = '';
    };

    return { newTask, addTask };
  },
};
</script>

<style lang="scss">
form {
  margin-top: 16px;
  border-bottom: 1px solid rgba(53, 53, 53, 0.308);
  display: flex;
  justify-content: space-between;

  .form__input {
    background: none;
    border: none;
    width: 100%;
    padding: 0 0 9px 0;
    font-size: 16px;

    &:focus {

      outline: none !important;

    }
  }

  .form__add-btn {
    border: none;
    margin-left: 10px;
    background: none;
    cursor: pointer;
    font-size: 16px;
    padding-bottom: 7px;
  }
}
</style>