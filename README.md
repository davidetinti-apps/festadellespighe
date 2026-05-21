# 🌾 Festa delle Spighe - Villafontana

Sito web della Festa delle Spighe, sagra parrocchiale di Villafontana.

## Struttura

- **Home** (`/`) - Landing page dell'edizione 2026
- **Storico** (`/storico`) - Galleria delle locandine delle edizioni passate
- **Menù** (`/menu`) - Menù dello stand gastronomico e del bar

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS 4**
- **Output standalone** per deploy con Node.js

## Setup

```bash
# Installa le dipendenze
npm install

# Sviluppo
npm run dev

# Build per produzione
npm run build

# Avvia in produzione
npm start
```

## Deploy in Produzione

L'app usa `output: "standalone"` per generare un bundle minimale.

```bash
npm run build
# Il server parte sulla porta 3000 di default
node .next/standalone/server.js
```

Puoi cambiare porta impostando la variabile `PORT`:

```bash
PORT=4000 node .next/standalone/server.js
```

Per deploy Docker tramite GitHub Actions, imposta il secret `APP_PORT` nel repository (es. `4000`).
Il workflow usera quella porta sia dentro il container sia nella publish (`-p APP_PORT:APP_PORT`).

### Nginx (reverse proxy)

```nginx
server {
    listen 80;
    server_name festadellespighe.parrocchia-villafontana.it;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Se usi una porta diversa da `3000`, aggiorna anche `proxy_pass` di conseguenza.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
