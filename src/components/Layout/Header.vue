<template>
    <header>
        <div class="header">
            <div class="header-top">
                <div class="header-top-search">
                    <img src="/svg/search.svg" alt="search">
                </div>
                <router-link class="header-logo" to="/">Avion</router-link>
                <div class="header-top-right">
                    <div class="header-top-right__basket">
                        <router-link to="/">
                            <img src="/svg/basket.svg" alt="basket">
                        </router-link>
                    </div>
                    <div class="header-top-right__avatar">
                        <router-link to="/">
                            <img src="/svg/avatar.svg" alt="avatar">
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="header-menu">
                <router-link class="header-menu-link" v-for="(element, i) in menu" :key="i" :to="element.path">{{element.name}}</router-link>
            </div>
        </div>
    </header>
</template>
<script setup>
import {ref} from 'vue'

const menu = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Catalog',
        path: '/catalog'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Contacts',
        path: 'contacts'
    }
]

</script>

<style lang="scss" scoped>
.header {
    height: 132px;
    background: #fff;
    &-top {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-between;
        padding: 20px 0;
        margin: 0 28px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
     &-logo {
        font-family: 'Clash Display';
        text-align: center;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        color: #22202E;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
    &-top-right {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 16px;
    }
    &-menu {
        display: flex;
        gap: 44px;
        justify-content: center;
        padding: 20px 0;
        &-link {
            text-decoration: none;
            font-family: 'Satoshi';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            color: #726E8D;
        }
    }
}
</style>