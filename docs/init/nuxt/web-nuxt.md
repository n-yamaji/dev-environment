# project init
## setup Nuxt
```
cd {repository}
npx --ignore-existing create-nuxt-app {project-name}
code {project-name}
npx npm-check-updates
npx npm-check-updates -u
yarn install

git add .
git commit -m "first commit"
git remote add origin git@github.com:n-yamaji/{project-name}.git
git push -u origin master
```

## setup TypeScript
```
yarn add --dev @nuxt/typescript-build
yarn add --dev @nuxtjs/eslint-config-typescript

# nuxt.config.js
# tsconfig.json
# .eslintrc.js
# package.json

git add .
git commit -m "typescript"
git push
```

## setup Netlify
```
# netlify.toml
# nuxt.config.js
# package.json

mkdir functions

yarn add --dev netlify-lambda
yarn add --dev concurrently

yarn add --dev @types/aws-lambda
yarn add --dev @babel/preset-typescript

git add .
git commit -m "netlify"
git push
```

## setup Auth0
```
yarn add --exact @nuxtjs/auth@4.7.0
yarn add --dev @types/nuxtjs__auth

# nuxt.config.js
# tsconfig.json
# middleware/auth.js
# pages/callback.vue
# pages/login.vue
# store/index.js

# Auth0での設定
# Allowed Callback URLs: http://localhost:3000/callback
# Allowed Web Origins: http://localhost:3000
# Allowed Logout URLs: http://localhost:3000

# Googleでの認証設定
# https://dev.classmethod.jp/server-side/auth0/auth0-google/


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
  - .nuxt
  - assets
  - components
    - {package}
      - ~Form.vue
      - ~Table.vue
      - ~Collection.vue
  - dist
  - functions
    - {function-name}.js
  - layouts
  - middleware
  - domain
    - {package}
      - Entity.ts
      - ~Repository.ts
  - pages
  - plugins
  - static
  - store
  - test

# UI Framework
- Vuetify