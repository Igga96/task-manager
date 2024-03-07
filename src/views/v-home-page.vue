<template>
    <div class="container">
        <input type="text" 
        placeholder="Введите ваше имя"
        v-model="userName">
        <router-link to="tasks">
            <button class="started-btn"
            @click="createUserName">Get started</button>
        </router-link>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const userName = ref('');
    const createUserName = () => {
      if (userName.value.trim()) {
        store.commit('createUserName', userName.value.trim());
      }
    };

    return {
      userName,
      createUserName,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 95vh;

    input {
        text-align: center;
        background: none;
        border: none;
        padding: 0 0 9px 0;
        font-size: 16px;
        border-bottom: 1px solid rgba(53, 53, 53, 0.308);

        &:focus {
            outline: none !important;
        }
    }

    .started-btn {
        margin-top: 16px;
        border: none;
        color: #fff;
        cursor: pointer;
        padding: 15px 52.5px;
        border-radius: 5px;
        transition: all 0.7s;
        background: #313131;
        text-transform: uppercase;
        background: rgb(53, 53, 53);

        &:hover {
            text-decoration: none;
            box-shadow: 0 1px 5px rgba(41, 41, 41, 0.9);
            background: linear-gradient(0deg, rgb(105, 105, 105), rgb(53, 53, 53));
        }
    }
}
</style>