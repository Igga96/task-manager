<template>
    <aside class="aside">
        <span class="aside__title">Онлайн:</span>
        <ul class="users-list">
            <li class="user-list__item">
                <span class="user-list__item_name">{{ userName }}</span>
                <span class="user-list__item_status online"></span>
            </li>
        </ul>
    </aside>
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

<style lang="scss" scoped>
.aside {
    height: 100px;
    border-right: 2px solid rgba(53, 53, 53, 0.308);
    border-bottom: 2px solid rgba(53, 53, 53, 0.308);
    border-bottom-right-radius: 5px;
    max-width: 30%;
    text-align: start;
    padding-top: 5px;

    .aside__title {
        margin: 20px;
    }

    .users-list {
        padding-inline-start: 0;
        width: 100%;
        margin-block-start: 5px;
        margin-block-end: 0;

        .user-list__item {
            background: rgb(53, 53, 53);
            list-style-type: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            color: #ffce63;
            padding: 3px 20px;
            text-transform: uppercase;

            .user-list__item_status {
                height: 12px;
                width: 12px;
                border-radius: 50%;
                text-align: center;
                vertical-align: center;
            }

            .online {
                background: greenyellow;
            }
        }
    }
}
</style>
