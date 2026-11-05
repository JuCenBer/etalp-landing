import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Icon } from '../icon/icon';
import { LINKS, SITE } from '../site-content';

@Component({
  selector: 'app-location',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <section id="ubicacion" class="section">
      <div class="container">
        <span class="eyebrow">Dónde estamos</span>
        <h2 class="section-title">Ubicación</h2>

        <p class="address">
          <app-icon name="pin" />
          <span>
            <strong>{{ site.location.address }}</strong><br />
            {{ site.location.city }}
          </span>
        </p>

        <div class="map">
          <iframe
            [src]="mapUrl"
            title="Mapa con la ubicación de la escuela"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          ></iframe>
        </div>

        <div class="actions">
          <a class="btn btn--primary" [href]="links.mapsDirections" target="_blank" rel="noopener">
            <app-icon name="directions" /> Cómo llegar
          </a>
          <a class="btn btn--outline" [href]="links.mapsPlace" target="_blank" rel="noopener">
            Abrir en Maps
          </a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .address {
      display: flex;
      gap: 10px;
      align-items: flex-start;
      font-size: 1.05rem;
      color: var(--ink-soft);

      app-icon {
        color: var(--orange-dark);
      }

      strong {
        color: var(--ink);
      }
    }

    .map {
      overflow: hidden;
      aspect-ratio: 4 / 3;
      border-radius: var(--radius);
      background: var(--sand);
      box-shadow: var(--shadow);

      iframe {
        width: 100%;
        height: 100%;
        border: 0;
      }
    }

    .actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-top: 16px;

      .btn {
        padding-inline: 12px;
        font-size: 0.9rem;
      }
    }
  `,
})
export class Location {
  protected readonly site = SITE;
  protected readonly links = LINKS;
  // URL construida a partir de constantes propias (site-content.ts), no de input del usuario.
  protected readonly mapUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(LINKS.mapsEmbed);
}
