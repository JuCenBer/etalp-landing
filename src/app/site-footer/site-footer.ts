import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../icon/icon';
import { LINKS, SITE } from '../site-content';

@Component({
  selector: 'app-site-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <footer>
      <div class="social">
        <a [href]="links.instagram" target="_blank" rel="noopener" aria-label="Instagram">
          <app-icon name="instagram" />
        </a>
        <a [href]="links.whatsapp" target="_blank" rel="noopener" aria-label="WhatsApp">
          <app-icon name="whatsapp" />
        </a>
        <a [href]="links.email" aria-label="Email">
          <app-icon name="email" />
        </a>
      </div>
      <p>© {{ year }} {{ site.shortName }} · {{ site.name }}</p>
    </footer>
  `,
  styles: `
    footer {
      // Espacio extra abajo para que el botón flotante no tape el texto
      padding: 28px 20px calc(96px + env(safe-area-inset-bottom));
      background: #181818;
      color: var(--sand);
      text-align: center;
      font-size: 0.85rem;
    }

    .social {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin-bottom: 12px;

      a {
        display: grid;
        place-items: center;
        width: 44px;
        height: 44px;
        font-size: 18px;
        color: var(--cream);

        &:hover {
          color: var(--orange);
        }
      }
    }

    p {
      margin: 0;
    }
  `,
})
export class SiteFooter {
  protected readonly site = SITE;
  protected readonly links = LINKS;
  protected readonly year = new Date().getFullYear();
}
