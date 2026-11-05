/** Formato de cada entrada de `public/news.json`. */
export interface NewsItem {
  title: string;
  /** Fecha ISO (AAAA-MM-DD). */
  date: string;
  /**
   * Texto de la tarjeta. Admite HTML simple, p. ej. enlaces:
   * `<a href='https://…' target='_blank' rel='noopener'>texto</a>` (usar comillas simples dentro del JSON).
   */
  summary: string;
  /** Ruta relativa a `public/` (ej: `img/news/torneo.jpg`). Opcional. */
  image?: string;
  /** Enlace externo para ampliar (ej: posteo de Instagram). Opcional. */
  link?: string;
}
