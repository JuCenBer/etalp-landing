# E.T.A.LP · Landing

Landing mobile-first de la Escuela de Tiro con Arco La Plata. Angular 22 (standalone, signals), desplegada en GitHub Pages.

## Desarrollo

```bash
npm install
npm start          # http://localhost:4200
```

## Editar contenido

| Qué | Dónde |
|---|---|
| Email, Instagram, WhatsApp, dirección, coordenadas, textos, horarios | `src/app/site-content.ts` |
| Noticias del carrusel | `public/news.json` |
| Imágenes (logo, fotos de noticias) | `public/img/` |

Formato de cada noticia (`image` y `link` son opcionales; sin imagen se muestra el logo):

```json
{
  "title": "Torneo de primavera",
  "date": "2026-10-05",
  "summary": "Texto breve.",
  "image": "img/news/torneo.jpg",
  "link": "https://instagram.com/p/..."
}
```

Las noticias se ordenan automáticamente por fecha (más recientes primero).

## Deploy en GitHub Pages

1. Subir el repo a GitHub.
2. En **Settings → Pages → Build and deployment**, elegir **Source: GitHub Actions**.
3. Cada push a `main` ejecuta `.github/workflows/deploy.yml`, que compila con `--base-href ./` y publica.
