import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE } from '../site-content';

@Component({
  selector: 'app-facilities',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="instalaciones" class="section section--sand">
      <div class="container">
        <span class="eyebrow">Dónde entrenamos</span>
        <h2 class="section-title">Instalaciones</h2>

        @for (place of site.facilities; track place.title) {
          <article class="place">
            <h3>{{ place.title }}</h3>
            <p>{{ place.text }}</p>

            <ul class="gallery" [attr.aria-label]="'Fotos: ' + place.title">
              @for (photo of place.photos; track photo.src) {
                <li><img [src]="photo.src" [alt]="photo.alt" width="1200" height="900" loading="lazy" /></li>
              } @empty {
                <li><img class="fallback" src="img/logo-night-3.png" alt="" loading="lazy" /></li>
              }
            </ul>
          </article>
        }
      </div>
    </section>
  `,
  styles: `
    .place + .place {
      margin-top: 36px;
    }

    h3 {
      font-size: 1.4rem;
      text-transform: uppercase;
    }

    p {
      color: var(--ink-soft);
    }

    /* Mobile: tira horizontal con scroll-snap. */
    .gallery {
      display: flex;
      gap: 12px;
      margin: 0 -20px;
      padding: 0 20px 8px;
      list-style: none;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-padding-inline: 20px;
      overscroll-behavior-x: contain;

      li {
        flex: 0 0 85%;
        scroll-snap-align: start;
      }

      li:only-child {
        flex-basis: 100%;
      }

      img {
        width: 100%;
        height: auto;
        aspect-ratio: 4 / 3;
        border-radius: var(--radius);
        object-fit: cover;
        background: var(--ink);
      }

      .fallback {
        object-fit: contain;
        padding: 24px;
      }
    }

    /* Desktop: grilla sin scroll. */
    @media (min-width: 640px) {
      .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        margin: 0;
        padding: 0;
        overflow: visible;
      }
    }
  `,
})
export class Facilities {
  protected readonly site = SITE;
}
