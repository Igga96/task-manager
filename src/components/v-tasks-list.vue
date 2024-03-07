<template>
  <ul class="task-list">
    <li class="task-list__item" v-for="task in tasks" :key="task.id">

      <span class="item__text" v-if="!task.isEditing">{{ task.text }}</span>
      <input class="item__input" v-else v-model="editedText" @keydown.enter.prevent="updateTask(task.id)"
        @blur="cancelEditing" />
      <div class="item__buttons">
        <button @click="editTask(task.id)"><img src="../assets/pencil.svg"></button>
        <button @click="removeTask(task.id)"><img src="../assets/basket.svg"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { ref, watchEffect } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    tasks: Array,
  },
  setup(props) {
    const store = useStore();
    const editedText = ref('');

    const editTask = (taskId) => {
      store.dispatch('toggleEditing', taskId);
      editedText.value = props.tasks.find(task => task.id === taskId).text;
    };

    const updateTask = (taskId) => {
      const newText = editedText.value.trim();
      if (newText) {
        store.dispatch('updateTaskText', { taskId, newText });
      }
    };

    const cancelEditing = (taskId) => {
      store.dispatch('toggleEditing', taskId);
      editedText.value = '';
    };

    const removeTask = (taskId) => {
      store.dispatch('removeTask', taskId);
    };

    watchEffect(() => {
      editedText.value = '';
    });

    return {
      editedText,
      editTask,
      updateTask,
      cancelEditing,
      removeTask,
    };
  },
};
</script>

<style lang="scss">
.task-list {
  padding-inline-start: 0;

  .task-list__item {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(53, 53, 53, 0.308);

    .item__text {
      padding: 0;
      width: 100%;
      background: none;
      border: none;
      text-align: start;


      &:focus {
        border: none;
      }
    }

    .item__input {
      border: none;
      background: none;
      width: 100%;
      color: red;
      font-size: 16px;
      text-decoration: bold;
      padding: 0 0 7px 0;

      &:focus {
        outline: none !important;
        color: red;
      }
    }

    .item__buttons {
      display: flex;

      button {
        border: none;
        margin-left: 10px;
        background: none;
        cursor: pointer;

        img {
          max-height: 20px;
        }
      }
    }
  }
}
</style>