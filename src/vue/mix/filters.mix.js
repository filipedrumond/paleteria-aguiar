// global mix filter
var globalMixFilter = () => {
    return {
        filters: {
            capitalizeFirstLetter: function (str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            },
            lowerCase: function (str) {
                return str.toLowerCase();
            },
            firstName: function (str) {
                let result = str.split(' ');
                return result[0];
            },
            phoneMask: function (str) {
                str = str.replace(/\D/g, '');             //Remove tudo o que não é dígito
                str = str.replace(/^(\d{2})(\d)/g, '($1) $2'); //Coloca parênteses em volta dos dois primeiros dígitos
                str = str.replace(/(\d)(\d{4})$/, '$1-$2');    //Coloca hífen entre o quarto e o quinto dígitos
                return str;    
            },
            removeTimeFromDate: function (str) {
                str = str.split('T')[0];
                return str;
            },
            photoUserHandler: function (url) {
                if (url == 'PATH_TO_THE_IMAGE') {
                    url = '/assets/img/user.png';
                }
                if (!url.includes('https://platform-lookaside')) {
                    return this.apiUrl + '/' + url;
                }
                var getParams = function (url) {
                    var params = {};
                    var parser = document.createElement('a');
                    parser.href = url;
                    var query = parser.search.substring(1);
                    var vars = query.split('&');
                    for (var i = 0; i < vars.length; i++) {
                        var pair = vars[i].split('=');
                        params[pair[0]] = decodeURIComponent(pair[1]);
                    }
                    return params;
                };
                let params = getParams(url);
                return `https://graph.facebook.com/${params.asid}/picture?type=large&width=720&height=720`;
            },
        },
    };
};
module.exports = globalMixFilter();
