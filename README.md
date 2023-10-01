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

| Method | Route                                                        | Keterangan                                                                                                                                                     |
| ------ | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🟩GET  | /                                                            | Menampilkan welcome page                                                                                                                                       |
| 🟩GET  | /users/signup                                                | Menampilkan halaman Sign Up page                                                                                                                               |
| 🟨POST | /users/signup                                                | Menerima data yang dikirim dari halaman `/users/signup` untuk _insertion_ data user lalu di _redirect_ ke home page                                            |
| 🟩GET  | /users/signin                                                | Menampilkan halaman Sign In page                                                                                                                               |
| 🟨POST | /users/signin/login                                          | Menerima data yang dikirim dari halaman `/users/signin` untuk _validation_ data user untuk login                                                               |
| 🟩GET  | /users/profile?id=(_id user_)                                | Menampilkan halaman profile dan menampilkan data user beserta postingan user yang ada dalam database                                                           |
| 🟩GET  | /users/profile/update?id=(_id user_)                         | Menampilkan halaman edit user profile                                                                                                                          |
| 🟩GET  | /users/delete?id=(_id user_)                                 | Melakukan _delete_ data user berdasarkan `id` yang dikirimkan                                                                                                  |
| 🟨POST | /users/profile/update?id=(_id user_)                         | Menerima data yang dikirim dari halaman `/users/profile/update?id=(_id user_)` untuk melakukan _update_ user                                                   |
| 🟩GET  | /users/profile/update/post?id=(_if user_)&postId=(_id post_) | Menampilkan halaman edit postingan user dari halaman profile                                                                                                   |
| 🟨POST | /users/profile/update/post?id=(_if user_)&postId=(_id post_) | Menerima data yang dikirim dari halaman `/users/profile/update/post?id=(_if user_)&postId=(_id post_)` untuk melakukan _update_ postingan dari halaman profile |
| 🟩GET  | /users/profile/delete/post?id=(_id user_)&postId=(_id post_) | Melakukan _delete_ data posting berdasarkan `id user` dan `id post` yang dikirimkan dari profile                                                               |
| 🟩GET  | /posts?id=(_id user_)                                        | Menampilkan semua posting, jumlah comment, dan jumlah like yang ada dalam satu postingan                                                                       |
| 🟩GET  | /posts/create?id=(_id user_)                                 | Menampilkan halaman create post                                                                                                                                |
| 🟨POST | /posts/create?id=(_id user_)                                 | Menerima data yang dikirim dari halaman `/posts/create?id=(_id user_) ` untuk melakukan _insertion_                                                            |
| 🟩GET  | /posts/update?id=(_id user_)&postId=(_id post_)              | Menampilkan halaman edit postingan user                                                                                                                        |
| 🟨POST | /posts/update?id=(_id user_)&postId=(_id post_)              | Menerima data yang dikirim dari halaman `/posts/update?id=(_if user_)&postId=(_id post_)` untuk melakukan _update_ post                                        |
| 🟩GET  | /posts/delete?id=(_id user_)&postId=(_id post_)              | Melakukan _delete_ data posting berdasarkan `id user` dan `id post` yang dikirimkan                                                                            |
| 🟩GET  | /posts/like?id=(_id user_)&postId=(_id post_)                | Menerima data yang dikirim dari halaman `/posts?id=(_id user_)` untuk _insertion_ jike user belum ngelike postingan dan _delete_ untuk user yang sudah ngelike |
| 🟩GET  | /posts/comments?id=(_id user_)&postId=(_id post_)            | Menampilkan halaman comments dari postingan yang ada                                                                                                           |
| 🟩GET  | /posts/comments/like?id=(_id user_)&postId=(_id post_)       | Menerima data yang dikirim dari halaman `/posts/comments?id=(_id user_)&postId=(_id post_)` untuk _insertio_ dan _delete_ dari halaman comments                |
| 🟩GET  | /comments/add-comment?id=(_id user_)                         | Menerima data yang dikirim dari halaman `/posts/comments?id=(_id user_)&postId=(_id post_)` untuk _insertion_ comment                                          |
| 🟩GET  | /comments/del-comment?id=(_id user_)                         | Melakukan _delete_ data comment berdasarkan `id user & id post` yang dikirimkan                                                                                |
