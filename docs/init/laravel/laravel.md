# project init
```
curl -s https://laravel.build/<YOUR_PROJECT_NAME> | bash
cd <YOUR_PROJECT_NAME> && ./vendor/bin/sail up -d

git init
git add .
git commit -m 'init laravel project'
```

# install jetstream
```
# ./vendor/bin/sail composer require laravel/jetstream
# Vuetifyを使うためにはVue2を使う必要があり、Vue2を使うためにはJetstreamの2.2.0より前のバージョンを使う必要がある
./vendor/bin/sail composer require laravel/jetstream:"2.1.4"
./vendor/bin/sail artisan jetstream:install inertia
npm install && npm run dev
./vendor/bin/sail artisan migrate 

git add .
git commit -m 'install jetstream with inertia'
```

# install vuetify
```
npm install vuetify
npm install sass sass-loader deepmerge -D
npm install @mdi/font -D
npm install material-design-icons-iconfont

# resources/js/app.jsのimportに以下の行を追記
#import Vuetify from 'vuetify';
#import 'vuetify/dist/vuetify.min.css';
#import '@mdi/font/css/materialdesignicons.css';
#import 'material-design-icons-iconfont/dist/material-design-icons.css';

# resources/js/app.jsのrender:の前に以下の行を追記
#vuetify: new Vuetify(),

# resources/js/app.jsのVue.use(InertiaPlugin)に以下の行を追記
#Vue.use(Vuetify)

# webpack.mix.jsの.webpackConfigの前に以下の行を追記
#    .sass('resources/sass/app.scss', 'public/css').version()

git add .
git commit -m 'install vuetify'
```

# uninstall tailwind
```
sed -i -e '/tailwindcss/d' package.json
rm package.json-e

echo '' > resources/css/app.css

sed -i -e 's/.postCss/.sass(\''resources/sass/app.scss\'', \''public/css\'').version()/' webpack.mix.js
sed -i -e '/postcss-import/d' webpack.mix.js
sed -i -e '/tailwindcss/d' webpack.mix.js
sed -i -e '/autoprefixer/d' webpack.mix.js
sed -i -e '/])/d' webpack.mix.js
rm webpack.mix.js-e

```
