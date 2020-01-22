# project init
## setup Nuxt
```
cd {repository}
create-nuxt-app {project-name}
ncu
ncu -u

git add .
git commit -m "first commit"
git remote add origin git@github.com:n-yamaji/{project-name}.git
git push -u origin master
```

## setup Netlify
```
# netlify.toml

yarn add netlify-lambda -D
yarn add concurrently -D

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
git add .
git commit -m "airtable"
git push
```

## setup TypeScript
```
yarn add --dev @nuxt/typescript-build
yarn add -D @nuxtjs/eslint-config-typescript

# nuxt.config.js
# tsconfig.json
# .eslintrc.js
# package.json
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