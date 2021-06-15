# environment init
## setup Node Version Manager
```
curl -fsSL https://fnm.vercel.app/install | bash
```

## setup Node
```
fnm list-remote
fnm install v15.14.0
# 2021/06/16時点で最新の v16.3.0 はエラーが発生する
```

## setup Blitz
```
npm install -g blitz --legacy-peer-deps
```

# project init
## setup Blitz
```
cd {repository}
blitz new {projectName}
```

## setup MySQL
```
# MySQL
cat << EOS > ./docker-compose.yml
version: '3'

services:
  db:
    restart: always
    platform: linux/x86_64
    image: mysql:8.0
    ports:
      - 3306:3306
    volumes:
      - ./infra/docker-compose/data/mysql:/var/lib/mysql:delegated
      - ./infra/docker-compose/init/mysql:/docker-entrypoint-initdb.d # 参照:https://hub.docker.com/_/mysql/
      - ./infra/docker-compose/conf/mysql/conf.d:/etc/mysql/conf.d # my.cnfを読み込む
    environment:
      MYSQL_ROOT_PASSWORD: root
EOS

echo DATABASE_URL=mysql://root:root@localhost:3306/{dbName} > .env
cp .env .env.local
cp .env .env.test.local

mkdir -p ./infra/docker-compose/init/mysql
echo "CREATE DATABASE IF NOT EXISTS {dbName};" > ./infra/docker-compose/init/mysql/init.sql


# .gitignore
echo "" >> .gitignore
echo "# Docker" >> .gitignore
echo "infra/docker-compose/data" >> .gitignore


# prisma
sed -i '' -e 's/sqlite/mysql/g' ./db/migrations/migration_lock.toml

sed -i '' -e 's/sqlite/mysql/g' ./db/schema.prisma

cd ./db/migrations
find . -delete
cd ../../

docker-compose up -d
blitz prisma migrate dev --name initial_migration
```