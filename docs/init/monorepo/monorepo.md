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
```
mkdir {package}
cd {package}

yarn add --dev typescript @types/node ts-node ts-node-dev
npx tsc --init

mkdir src
touch src/index.ts

git add .
git commit -m "typescript"

```


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

## setup Tor Proxy
参考
- https://hub.docker.com/r/dperson/torproxy/

``` docker-compose.yml
version: '3'

services:
  proxy:
    image: dperson/torproxy
    ports:
      - "8118:8118"
```

### Tor + AxiosでのHTTPリクエスト
```
yarn add axios https-proxy-agent
yarn add --dev @types/axios
```

``` idnex.ts
import Axios from 'axios'
import { HttpsProxyAgent } from 'https-proxy-agent'

const httpClient = Axios.create(
    { 
        httpsAgent: new HttpsProxyAgent('http://localhost:8118'), 
        proxy: false, 
        validateStatus: (_) => true 
    }
)

httpClient.get('https://google.com')
```
