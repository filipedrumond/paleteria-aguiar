<template>
    <div clas="w-100 text-center">
        <h1 class="text-center mb-2">
            404 NOT FOUND
            <a class="text-primary" href="#" title="voltar" @click="back" rel="noopener noreferrer">
                <i class="fa fa-backward" aria-hidden="true"></i>
            </a>
        </h1>
        <h2 class="text-center mb-2">Nenhum resultado encontrado</h2>
        <h2 class="text-center">
            <a href="#" class="text-secondary" @click="back">Voltar</a>
        </h2>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
    data() {
        return {
        };
    },
    created: function () {},
    components: {},
    methods: {
        back: function(e){
            e.preventDefault();
            window.history.back();
        }
    },
    computed: {},
};
</script>