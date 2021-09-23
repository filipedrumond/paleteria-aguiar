var rimraf = require('rimraf');

rimraf.sync('./html/fonts');
console.log('Directory fonts deleted');

var fs = require('fs');
if (!fs.existsSync('./html/fonts')) {
    fs.mkdirSync('./html/fonts');
    console.log('Directory fonts created');
}
fs.writeFile('./html/fonts/.gitkeep', '', 'utf8', function (err) {
    if (err) return console.log(err);
    console.log('.gitkkep created');
});
