# Backend Express - Rachann Post

REST API sederhana untuk CRUD postingan (judul, isi, dan gambar). API ini dipakai sebagai backend aplikasi mobile Rachann Post yang dibuat dengan React Native.

## Teknologi

- Node.js dan Express
- Prisma ORM dengan database MySQL
- Multer untuk upload gambar
- express-validator untuk validasi input

## Endpoint

| Method | Endpoint         | Keterangan                                        |
| ------ | ---------------- | ------------------------------------------------- |
| GET    | `/api/posts`     | Mengambil semua postingan                         |
| POST   | `/api/posts`     | Menambah postingan (form-data: image, title, content) |
| GET    | `/api/posts/:id` | Mengambil detail postingan                        |
| PUT    | `/api/posts/:id` | Mengubah postingan (image boleh dikosongkan)      |
| DELETE | `/api/posts/:id` | Menghapus postingan                               |

Gambar yang diunggah disimpan di folder `uploads/` dan dapat diakses melalui `/uploads/:filename`. Format yang diterima: jpg, jpeg, png, gif, dan webp dengan ukuran maksimal 5 MB.

## Cara Menjalankan

1. Install dependency

   ```bash
   npm install
   ```

2. Salin `.env.example` menjadi `.env`, lalu sesuaikan `DATABASE_URL` dengan database MySQL yang dipakai.

3. Jalankan migrasi database

   ```bash
   npx prisma migrate dev
   ```

4. Jalankan server

   ```bash
   node index.js
   ```

Server berjalan di `http://localhost:3000`.

---

Dibuat oleh Muhammad Raditya Santosa.
