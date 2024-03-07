import { createStore } from 'vuex';

const tasksFromStorage = JSON.parse(localStorage.getItem('tasks')) || [];
const userNameFromStorage = localStorage.getItem('userName') || '';

export default createStore({
  state() {
    return {
      tasks: tasksFromStorage.map(task => ({ ...task, isEditing: false })),
      users: [
        { name: userNameFromStorage },
      ],
    };
  },
  mutations: {
    createUserName(state, newName) {
      state.users[0].name = newName;
      localStorage.setItem('userName', newName);
    },
    addTask(state, task) {
      state.tasks.push({ ...task, isEditing: false });
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    removeTask(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    toggleEditing(state, taskId) {
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.isEditing = !task.isEditing;
      }
    },
    updateTaskText(state, { taskId, newText }) {
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.text = newText;
        task.isEditing = false;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task);
    },
    removeTask({ commit }, taskId) {
      commit('removeTask', taskId);
    },
    toggleEditing({ commit }, taskId) {
      commit('toggleEditing', taskId);
    },
    updateTaskText({ commit }, payload) {
      commit('updateTaskText', payload);
    },
  },
  getters: {
    tasks: state => state.tasks,
    users: state => state.users,
  },
});