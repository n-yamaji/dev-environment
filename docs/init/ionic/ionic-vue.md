# project init
## setup CLI
```
# vue
npm install -g @vue/cli

# ionic
npm uninstall -g ionic
npm install -g @ionic/cli

# cocoapods
sudo gem install -n /usr/local/bin cocoapods
```

## setup Vue
```
cd {repository}
vue create {project-name}
# babel, eslint

cd {project-name}

vue add router
# Use history mode for router? Yes
vue add vue-cli-plugin-ionic
npm install

# router/index.js

git add .
git commit -m "vue"
git push -u origin master
```

## setup Ionic
```
npx ionic init
# Project name: {project-name}

# fix: "export 'ICON_PATHS' was not found in 'ionicons/icons'
npm install -D ionicons@4.5.9-1

# bluetooth
npm install @ionic-native/core

## https://ionicframework.com/jp/docs/native/bluetooth-le
npm install @ionic-native/bluetooth-le
npm install cordova-plugin-bluetoothle

## https://ionicframework.com/docs/v3/native/ble/
#npm install @ionic-native/ble
#npm install cordova-plugin-ble-central

npx cap sync
npm run build
npx cap copy

# ios
npx cap add ios
npx cap open ios
cd ios/App
pod install
cd ../../

# todo: android


git add .
git commit -m "ionic"
git push -u origin master
```

## setup TypeScript
```
yarn add --dev @nuxt/typescript-build
yarn add -dev @nuxtjs/eslint-config-typescript

# nuxt.config.js
# tsconfig.json
# .eslintrc.js
# package.json

git add .
git commit -m "typescript"
git push
```


## setup Airtable
```
yarn add airtable

# option
yarn add --dev @types/airtable

git add .
git commit -m "airtable"
git push
```

## setup Date
https://github.com/nuxt-community/date-fns-module

```
yarn add --dev @nuxtjs/date-fns

git add .
git commit -m "date-fns"
git push
```

## setup DDD
```
mkdir domain
mkdir domain/example
touch domain/example/Example.ts
touch domain/example/ExampleRepository.ts

git add .
git commit -m "ddd"
git push
```

## setup Jest
```
yarn add --dev ts-jest
yarn add --dev @types/jest

git add .
git commit -m "jest"
git push
```

# ディレクトリ構成
- {projectName}
  - public
  - src
    - assets
    - components
      - {package}
        - ~Form.vue
        - ~Table.vue
        - ~Collection.vue
    - domain
      - {package}
        - Entity.ts
        - ~Repository.ts
    - plugins
    - router
    - views
