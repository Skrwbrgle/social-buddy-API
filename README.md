# Social-Buddy-API

Mini project BE-API

### intallation package

```
 npm init -y
 npm i express dotenv ejs pg sequelize
 npm i nodemon sequelize-cli --save-dev
```

### script sequelize

```bash
npx sequelize-cli init

npx sequelize-cli model:generate --name user --attributes username:string,email:string,password:string,image:string

npx sequelize-cli model:generate --name post --attributes text_post:string,user_id:integer,image:string

npx sequelize-cli model:generate --name comment --attributes text_comment:string,popsting_id:integer,image:string

npx sequelize-cli model:generate --name follower --attributes user_id:integer,user_folower_id:integer

npx equelize-cli db:migrate

npx equelize-cli db:create

```
