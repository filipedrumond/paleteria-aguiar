const mix = require('laravel-mix');
const mode = process.env.MODE || 'DEV';
if(mode == 'DEV'){
    mix.webpackConfig({
        devtool: 'inline-source-map'
    });
}

mix.autoload({ jquery: ['$', 'window.jQuery'] });

mix.options({
    publicPath: 'html',
    processCssUrls: false,
});

mix.webpackConfig({
    output: {
        publicPath: '/html',
    },
});

mix.copy('src/assets', 'html/assets');
mix.copy('db/img', 'html/assets/img');
mix.copy(
    'node_modules/font-awesome/fonts',
    'html/node_modules/font-awesome/fonts'
);

mix.disableNotifications();

if(mode == 'DEV'){
    mix.sass('src/scss/main.scss', 'html/build/css').sourceMaps(true, 'source-map');
    mix.js('src/main.js', 'html/build/js').vue().sourceMaps(true, 'source-map');
}else{
    mix.sass('src/scss/main.scss', 'html/build/css');
    mix.js('src/main.js', 'html/build/js').vue();
}