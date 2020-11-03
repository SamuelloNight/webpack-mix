const laravelMix = require('laravel-mix');

laravelMix
    .js('src/javascript/app.js', 'dist/js')
    .sass('src/sass/app.scss', 'dist/css');
