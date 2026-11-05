import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../icon/icon';
import { LINKS } from '../site-content';

/** Botón flotante de WhatsApp, siempre visible en mobile. */
@Component({
  selector: 'app-whatsapp-fab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <a class="fab" [href]="href" target="_blank" rel="noopener" aria-label="Escribinos por WhatsApp">
      <app-icon name="whatsapp" />
    </a>
  `,
  styles: `
    .fab {
      position: fixed;
      right: 18px;
      bottom: calc(18px + env(safe-area-inset-bottom));
      z-index: 40;
      display: grid;
      place-items: center;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: var(--orange);
      color: var(--ink);
      font-size: 24px;
      box-shadow: 0 8px 24px rgb(34 34 34 / 35%);
      transition: transform 0.15s ease;

      &:active {
        transform: scale(0.94);
      }
    }
  `,
})
export class WhatsappFab {
  protected readonly href = LINKS.whatsapp;
}
