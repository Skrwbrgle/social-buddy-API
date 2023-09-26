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

| Method | Route             | Keterangan                                                                             |
| ------ | ----------------- | -------------------------------------------------------------------------------------- |
| 🟩GET  | /                 | Menampilkan home page                                                                  |
| 🟩GET  | /users            | Menampilkan semua users yang ada dalam database                                        |
| 🟩GET  | /posts            | Menampilkan semua posts yang ada dalam database                                        |
| 🟩GET  | /comments         | Menampilkan semua comments yang ada dalam database                                     |
| 🟩GET  | /likes            | Menampilkan semua likes yang ada dalam database                                        |
| 🟨POST | /users/create     | Menerima data yang dikirim dari halaman `/users/create` untuk melakukan _insertion_    |
| 🟨POST | /posts/create     | Menerima data yang dikirim dari halaman `/posts/create` untuk melakukan _insertion_    |
| 🟨POST | /likes/create     | Menerima data yang dikirim dari halaman `/likes/create` untuk melakukan _insertion_    |
| 🟨POST | /comments/create  | Menerima data yang dikirim dari halaman `/comments/create` untuk melakukan _insertion_ |
| 🟨POST | /users/update/:id | Menerima data yang dikirim dari halaman `/users/update/:id` untuk melakukan _update_   |
| 🟩GET  | /users/delete/:id | Melakukan _delete_ data fruit berdasarkan `id` yang dikirimkan                         |

| 👍GET | /users/create | Menampilkan halaman form untuk menambahkan data fruit |
| 👍GET | /posts/create | Menampilkan halaman form untuk menambahkan data posts |
| 👍GET | /likes/create | Menampilkan halaman form untuk menambahkan data likes |
| 👍 GET | /posts/delete/:id | Melakukan _delete_ data posts berdasarkan `id` yang dikirimkan |
| 👍 GET | /likes/delete/:id | Melakukan _delete_ data likes berdasarkan `id` yang dikirimkan |
| 👍GET | /fruits/update/:id | Menampilkan halaman form untuk mengubah data fruit dari Id |
| 👍GET | /posts/update/:id | Menampilkan halaman form untuk mengubah data posts dari Id |
| 👍POST | /posts/update/:id | Menerima data yang dikirim dari halaman `/brands/update/:id` untuk melakukan _update_ |
| 👍GET | /likes/update/:id | Menampilkan halaman form untuk mengubah data likes dari Id |
| 👍POST | /likes/update/:id | Menerima data yang dikirim dari halaman `/likes/update/:id` untuk melakukan _update_ |
