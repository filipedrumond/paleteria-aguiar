<template>
    <div class="">
        <form class="form-login" action="">
            <div class="">
                <span>Usuário / Email</span>
                <input type="text" name="user">
            </div>
            <div class="">
                <span>Senha</span>
                <input type="password" name="password">
            </div>
            <button type="submit">ENVIAR</button>
        </form>
    </div>
</template>

<script>
// var component = require("./components/Component")
export default {
    name: 'login',
    data() {
        return {};
    },
    mounted: function () {
        var self = this;
        $('form').on('submit',function(e){
            e.preventDefault();
            var $this = $(this);
            var user = $this.find('input[name="user"]').val();
            var password = $this.find('input[name="password"]').val();

            (async () => {
                try {
                    await self.apiLogin(user, password);
                } catch (error) {
                    self.SimpleAlerts.error({ text: 'Senha Incorreta' });
                    return console.log(error);
                }
                self.$session.set('token', 'userName ' + user);
                self.$router.push('/');
            })();
        });
        return;
    },
    components: {},
};
</script>
<style lang="scss"></style>

