# reference
https://suzukalight.com/2019-08-18-monorepo-prisma2-cra-typescript/

# project init
```
mkdir {project}
cd {project}
git init
yarn init -y

mkdir packages

git add .
git commit -m "first commit"
```

``` .gitignore
# dependencies
node_modules

# misc
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

``` package.json
{
  "private": true,
  "workspaces": {
    "packages": [
      "packages/*"
    ],
    "nohoist": [
      "**/react-scripts",
      "**/react-scripts/**",
      "**/@generated",
      "**/@generated/**"
    ]
  }
}
```

## setup TypeScript

## setup Crawler
```
yarn add axios https-proxy-agent jsdom
yarn add --dev @types/axios @types/jsdom

yarn add --dev ts-node-dev
```

```
   "scripts": {
      "start": "ts-node src/index.ts",
      "crawl": "npx ts-node-dev src/index.ts",
      "crawl2": "npx ts-node-dev --respawn src/index2.ts"
   }
```
