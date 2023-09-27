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

npx sequelize-cli model:generate --name post --attributes textPost:text,userId:integer,image:string

npx sequelize-cli model:generate --name comment --attributes textComment:text,postId:integer,image:string

npx sequelize-cli model:generate --name like --attributes userId:integer,postId:integer,dateLike:date

npx equelize-cli db:migrate

npx equelize-cli db:create

```

### API documentation

| Method   | Route                | Keterangan                                                                                   |
| -------- | -------------------- | -------------------------------------------------------------------------------------------- |
| 🟩GET    | /                    | Menampilkan home page                                                                        |
| 🟩GET    | /users               | Menampilkan semua users yang ada dalam database                                              |
| 🟩GET    | /posts               | Menampilkan semua posts yang ada dalam database                                              |
| 🟩GET    | /posts/:id           | Menampilkan post beserta like yang ada dalam database berdasarkan dari id post               |
| 🟩GET    | /comments            | Menampilkan semua comments yang ada dalam database                                           |
| 🟩GET    | /likes               | Menampilkan semua likes yang ada dalam database                                              |
| 🟨POST   | /users/create        | Menerima data yang dikirim dari halaman `/users/create` untuk melakukan _insertion_          |
| 🟨POST   | /posts/create        | Menerima data yang dikirim dari halaman `/posts/create` untuk melakukan _insertion_          |
| 🟨POST   | /comments/create     | Menerima data yang dikirim dari halaman `/comments/create` untuk melakukan _insertion_       |
| 🟨POST   | /likes/create        | Menerima data yang dikirim dari halaman `/likes/create` untuk melakukan _insertion_          |
| 🟥DELETE | /users/delete/:id    | Melakukan _delete_ data user berdasarkan `id` yang dikirimkan                                |
| 🟥DELETE | /posts/delete/:id    | Melakukan _delete_ data post berdasarkan `id` yang dikirimkan                                |
| 🟥DELETE | /comments/delete/:id | Melakukan _delete_ data comment berdasarkan `id` yang dikirimkan                             |
| 🟥DELETE | /likes/delete/       | Melakukan _delete_ data like yang dikirim dari halaman `/likes/delete` yang dikirimkan       |
| 🟦PUT    | /users/update/:id    | Menerima data yang dikirim dari halaman `/users/update/:id` untuk melakukan _update_ user    |
| 🟦PUT    | /posts/update/:id    | Menerima data yang dikirim dari halaman `/posts/update/:id` untuk melakukan _update_ post    |
| 🟦PUT    | /comments/update/:id | Menerima data yang dikirim dari halaman `/comments/update/:id` untuk melakukan _update_ post |
