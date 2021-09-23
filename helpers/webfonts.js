var fs = require('fs');

var data = fs.readFileSync('./html/fonts/icons.css', 'utf8');
var result = data.replace(new RegExp('./icons', 'g'), '../../../fonts/icons');

fs.writeFile('./src/scss/helpers/webfonts.scss', result, 'utf8', function (
    err
) {
    if (err) return console.log(err);
});
console.log('Webfonts Generated');
