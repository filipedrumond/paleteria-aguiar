<template>
    <div id="app" class="">
        <headerBar />
        <main>
            <router-view />
        </main>
        <footerBar />
    </div>
</template>

<script>
import footerBar from './vue/components/footerBar';
import headerBar from './vue/components/headerBar';

export default {
    name: 'App',
    data() {
        return {};
    },
    created: function() {},
    components: { footerBar, headerBar }
};
</script>

<style lang="scss"></style>