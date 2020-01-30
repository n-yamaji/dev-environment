# project init
## setup Nuxt
```
cd {repository}
npx create-nuxt-app {project-name}
ncu
ncu -u

git add .
git commit -m "first commit"
git remote add origin git@github.com:n-yamaji/{project-name}.git
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

## setup Netlify
```
# netlify.toml

mkdir functions

yarn add --dev netlify-lambda
yarn add --dev concurrently

git add .
git commit -m "netlify"
git push
```

## setup Auth0
```
yarn add @nuxtjs/auth@4.7.0 --exact
yarn add @types/nuxtjs__auth --dev

# nuxt.config.js
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