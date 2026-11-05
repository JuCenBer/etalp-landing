import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { LINKS, SITE } from '../site-content';
import { NewsCarousel } from './news-carousel';
import { NewsItem } from './news-item';

@Component({
  selector: 'app-news',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NewsCarousel],
  template: `
    <section id="noticias" class="section section--sand">
      <div class="container">
        <span class="eyebrow">Novedades</span>
        <h2 class="section-title">Noticias</h2>
      </div>

      @if (news.isLoading()) {
        <p class="container status">Cargando noticias…</p>
      } @else if (news.error()) {
        <p class="container status">
          No pudimos cargar las noticias. Seguinos en
          <a [href]="links.instagram" target="_blank" rel="noopener">&#64;{{ site.contact.instagram }}</a>
          para enterarte de todo.
        </p>
      } @else if (sorted().length === 0) {
        <p class="container status">Pronto vamos a publicar novedades.</p>
      } @else {
        <app-news-carousel [items]="sorted()" />
      }
    </section>
  `,
  styles: `
    .status {
      color: var(--ink-soft);

      a {
        font-weight: 600;
        color: var(--orange-dark);
      }
    }
  `,
})
export class News {
  protected readonly site = SITE;
  protected readonly links = LINKS;

  // Relativo al <base href>, funciona igual en local y en GitHub Pages.
  protected readonly news = httpResource<NewsItem[]>(() => 'news.json', { defaultValue: [] });

  /** Más recientes primero. */
  protected readonly sorted = computed(() =>
    [...this.news.value()].sort((a, b) => b.date.localeCompare(a.date)),
  );
}
