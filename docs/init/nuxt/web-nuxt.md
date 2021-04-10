# environment init
```
brew install nodebrew
nodebrew install-binary latest
```

# project init
## setup Nuxt
```
cd {repository}
yarn create nuxt-app {project-name}
code {project-name}
npx npm-check-updates
npx npm-check-updates -u
yarn install

sed -i -e 's/.js,.vue/.js,.ts,.vue/g' ./package.json

git add .
git commit -m "first commit"
git remote add origin git@github.com:n-yamaji/{project-name}.git
git push -u origin master
```

## setup Netlify Function
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

## setup Firebase
```
# https://firebase.nuxtjs.org/guide/getting-started/#requirements
yarn add firebase
yarn add @nuxtjs/firebase

# Nuxtの型が解決できなければ
yarn add @nuxt@types --dev

# nuxt.config.js
# tsconfig.json

git add .
git commit -m "firebase"
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

## setup Bluetooth
```
yarn add --dev @types/web-bluetooth
# tsconfig.json

git add .
git commit -m "web bluetooth"
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
- Ant Design Vue

# TIPS
## Firebase
### Get
```
async asyncData({ app }) {
  // ルートコレクションを指定
  const todosCollection = app.$fireStore.collection('todos')

  // スナップショットを取得
  const todosSnapshot = await todosCollection.limit(100).get()

  // ドキュメントを変換
  const todos = todosSnapshot.docs.map((doc) => {
    // ドキュメントをデータに変換
    const todo = doc.data()!
    return {
      id: doc.id,
      hoge: todo.hoge,
      fuga: todo.fuga,
    }
  })

  return {
    todos,
  }
},
```

### Post
```
methods: {
  async add() {
    // ルートコレクションを指定
    const todosCollection = this.$fireStore.collection('todos')

    // ドキュメントを追加
    await todosCollection.add({ fuga: this.newFuga, hoge: this.newHoge })
  },
},
```

### Put
```
methods: {
  async update() {
    // ルートコレクションを指定
    const todosCollection = this.$fireStore.collection('todos')

    // ドキュメントを追加
    const todoDoc = await todos.doc('VxrTg1VAal1lc7vDdrHb').get()

    // ドキュメントを更新
    await todoDoc.ref.set({ fuga: this.fuga, hoge: this.hoge })
  },
},
```

### Subscribe
```
mounted() {
  // ルートコレクションを指定
  const todosCollection = this.$fireStore.collection('todos')

  // 変更の検知
  todosCollection.onSnapshot((snapshot) => {
    const todos = snapshot.docs.map((doc) => {
      const todo = doc.data()!
      return {
        id: doc.id,
        hoge: todo.hoge as string,
        fuga: todo.fuga as string,
      }
    })
    
    this.todos = todos
  })
},
```
