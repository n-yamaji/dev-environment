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
