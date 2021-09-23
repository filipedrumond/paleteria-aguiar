const fs = require('fs');
var exec = require('child_process').exec;
exec('npm run build-icons', function(err, stdout) {
    if (err) {
        console.log(err);
    }
    console.log(stdout);
    copyWriteWebFonts();
});

function copyWriteWebFonts(){
    try {
        const data = fs.readFileSync('html/fonts/icons.css', 'utf8');
        let beginOfSearch = data.indexOf('.icon-');
        let randomNumber = Math.floor(Math.random() * (Number.MAX_VALUE - 1) + 1) ;

        let dataToWrite = 
`@font-face {
    font-family: "icons";
    src: url("../../../fonts/icons.eot?${randomNumber}?#iefix") format("embedded-opentype"),
    url("../../../fonts/icons.woff2?${randomNumber}") format("woff2"),
    url("../../../fonts/icons.woff?${randomNumber}") format("woff"),
    url("../../../fonts/icons.ttf?${randomNumber}") format("truetype"),
    url("../../../fonts/icons.svg?${randomNumber}#icons") format("svg");
}
        
i[class^="icon-"]:before, i[class*=" icon-"]:before {
    font-family: icons !important;
    font-style: normal;
    font-weight: normal !important;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;

        dataToWrite += data.slice(beginOfSearch);
        fs.writeFileSync('src/scss/helpers/webfonts.scss', dataToWrite);
        console.log('Icons and WebFonts Builded');

    } catch (err) {
        console.error(err);
    }
}
