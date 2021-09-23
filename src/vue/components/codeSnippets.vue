<template>
    <div class="c-footerBar">
        <slot></slot> 
    </div>
</template>

<script>
export default {
    name: 'footerBar',
    data() {
        return {};
    },
    created: function () {
        window.snipet = this;
    },
    components:{},
    methods: {},
};
</script>
