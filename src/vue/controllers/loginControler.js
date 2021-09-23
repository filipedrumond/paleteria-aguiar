var CryptoJS = require('crypto-js');
var LoginController = () => {
    return {
        methods: {
            apiLogin: function (user, password) {

                let self = this;
                var md5Pass = CryptoJS.MD5(password);

                var url = '?username=' + user;

                if(user.includes('@') && user.includes('.com')){
                    url = '?email=' + user;
                }
                url += '&password=' + md5Pass;

                return this.$http.get(self.apiUrl + '/users' + url);
            },
            getPessoa: function (id) {

                let self = this;
                let url = '?id='+id;

                console.log(self.apiUrl + '/pessoas/' + url);
                return this.$http.get(self.apiUrl + '/pessoas/' + url);
            },
        },
    };
};
module.exports = LoginController();
