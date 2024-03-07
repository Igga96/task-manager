<template>
    <header class="header">
        <div class="header__logo">
            <span class="header__logo-top">Tasks</span>
            <span class="header__logo header__logo-bottom">manager</span>
        </div>
        <div class="header__user-name">
            <span>{{ userName }}</span>
            <router-link to="/">
                <button>
                    <img src="../assets/logout.svg" alt="icon">
                </button>
            </router-link>
        </div>
    </header>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        const user = computed(() => store.getters.users[0]);
        const userName = computed(() => user.value ? user.value.name : '');

        return {
            userName,
        };
    },
};
</script>

<style lang="scss">
.header {
    background: rgb(53, 53, 53);
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header__logo {
        color: #ffce63;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        align-items: start;

        .header__logo-top {
            font-size: 24px;
        }

        .header__logo-bottom {
            width: 100%;
            text-anchor: middle;
            font-size: 12px;
            flex-grow: 1;
        }
    }

    .header__user-name {
        color: #ffce63;
        text-transform: uppercase;
        display: flex;
        align-items: center;

        button {
            background: none;
            border: none;
            cursor: pointer;

            img {
                max-height: 16px;
                margin-left: 10px;
            }
        }
    }
}
</style>