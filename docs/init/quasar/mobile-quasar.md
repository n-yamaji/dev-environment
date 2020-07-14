# environment init
```
brew install nodebrew
nodebrew install-binary latest
```

# project init
## setup Quasar
```
cd {repository}
npx quasar create {project-name}
code {project-name}
npx npm-check-updates
npx npm-check-updates -u
yarn install

git init
git add .
git commit -m "first commit"
git remote add origin git@github.com:n-yamaji/{project-name}.git
git push -u origin master
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
  - public
  - src
    - assets
    - boot
    - components
      - {package}
        - ~Form.vue
        - ~Table.vue
        - ~Collection.vue
    - css
    - layouts
    - domain
      - {package}
        - Entity.ts
        - ~Repository.ts
    - pages
    - router
