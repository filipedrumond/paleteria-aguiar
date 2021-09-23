<template>
    <div class="c-modals d-flex mt-3">
        <div class="w-50 text-center">
            <div class="mb-2">
                <h3>Modais de teste <a target="_BLANK" href="https://www.npmjs.com/package/@filipedp/simple_dialog">Docs disponiveis em npm.com</a></h3>
            </div>
            <button @click="showModal('success')"   class="btn btn-success btn-large">success</button>
            <button @click="showModal('info')"      class="btn btn-info btn-large">info</button>
            <button @click="showModal('warning')"   class="btn btn-warning btn-large">warning</button>
            <button @click="showModal('error')"     class="btn btn-danger btn-large">error</button>
        </div>
        <div class="w-50 text-center">
            <div class="mb-2">
                <h3>Confirms de teste <a target="_BLANK" href="https://www.npmjs.com/package/@filipedp/simple_dialog">Docs disponiveis em npm.com</a></h3>
            </div>
            <button @click="showConfirm('success')"   class="btn btn-success btn-large">success</button>
            <button @click="showConfirm('info')"      class="btn btn-info btn-large">info</button>
            <button @click="showConfirm('warning')"   class="btn btn-warning btn-large">warning</button>
            <button @click="showConfirm('error')"     class="btn btn-danger btn-large">error</button>
        </div>
        <div class="w-100 mt-3 text-center d-none">
            <div class="mb-2">
                <h3>Confirms de teste <a target="_BLANK" href="https://www.npmjs.com/package/@filipedp/simple_dialog">Docs disponiveis em npm.com</a></h3>
            </div>
            <button @click="showForms('success')"   class="btn btn-success btn-large">success</button>
            <button @click="showForms('info')"      class="btn btn-info btn-large">info</button>
            <button @click="showForms('warning')"   class="btn btn-warning btn-large">warning</button>
            <button @click="showForms('error')"     class="btn btn-danger btn-large">error</button>
        </div>
    </div>
</template>

<script>
import { SimpleAlerts, SimpleConfirms/*, SimpleFormAlerts */} from '@filipedp/simple_dialog';

export default {
    name: 'modals',
    data() {
        return {};
    },
    created: function () {},
    methods: {
        showModal: function(typeModal){
            SimpleAlerts[typeModal]({
                title: 'Alert charmoso porem simples',
                text: 'texto de um modal simples, fácil não ?',
                time: 5000,
            });
        },

        showConfirm: function(typeModal){
            SimpleConfirms[typeModal]({
                title: 'Alert charmoso porem simples',
                text: 'texto de um modal simples, fácil não ?',
                time: false,
                closeText: 'Fácin',
                negateCallback: function() {
                    alert('Eu tenho callback');
                },
                confirmCallback: function() {
                    alert('Eu tenho callback separados');
                },
            });
        },

        // showForms: function(typeModal){
        //     let $form = $('<form>');
        //     SimpleFormAlerts[typeModal]({
        //         fomr: $form,
        //         title: 'Confirm Simples de Escolha',
        //         text: 'texto de um confirm simples, fácil não ?',
        //         submitText:'Confirmar',
        //         closeCallback:function(){
        //             alert('eu tenho callbacks');
        //         },
        //         submitCallback: function () {
        //             alert('eu tenho callbacks');
        //             $('.modal').modal('hide');
        //         }
        //     });
        // },
    },
};
</script>
