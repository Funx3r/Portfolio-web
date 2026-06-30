# Rangga Portfolio — Next.js + Tailwind (Neubrutalism)

Portfolio personal Muhammad Rangga Fabiano Martian, dikonversi dari design Stitch AI ke Next.js (App Router) + TypeScript + Tailwind CSS.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Struktur

```
app/
  layout.tsx     -> font setup (Space Grotesk, Inter) + metadata
  page.tsx       -> seluruh konten halaman (Hero, About, Education, Experience, Projects, Skills, Footer)
  globals.css    -> Tailwind + utility class neubrutalism (.brutalist-card, .brutalist-button, .brutalist-tag)
components/
  Navbar.tsx     -> client component (scroll-spy untuk active nav link)
tailwind.config.ts -> semua token warna/spacing/font dari design Stitch
```

## Sebelum deploy, cek dulu:

1. **Foto project** — gambar VENTARA & SIMJUR masih pakai link sementara dari Stitch (`lh3.googleusercontent.com`). Link ini bisa expired/dibatasi kapan saja. Ganti dengan screenshot asli project lu, taruh di folder `public/`, lalu update `src` di `app/page.tsx` jadi misal `/ventara.png`.
2. **Link sosial** — GitHub sudah diisi `github.com/Funx3r`. Link LinkedIn ditebak dari nama (`linkedin.com/in/muhammad-rangga-fabiano-martian`) — cek dan sesuaikan ke URL profil asli lu.
3. **Case Study / View Demo link** — di kartu project belum ada link aktif (cuma teks). Kalau punya repo/demo, tambahkan `href` ke situ.

## Deploy ke Vercel

1. Push folder ini ke repo GitHub baru.
2. Buka [vercel.com](https://vercel.com), import repo tersebut.
3. Vercel otomatis detect Next.js, langsung klik Deploy — selesai.

Atau via CLI:
```bash
npm i -g vercel
vercel
```
