import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon, IconName } from '../icon/icon';
import { LINKS, SITE } from '../site-content';

interface ContactChannel {
  icon: IconName;
  label: string;
  value: string;
  href: string;
  external: boolean;
}

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <section id="contacto" class="section section--dark">
      <div class="container">
        <span class="eyebrow">Hablemos</span>
        <h2 class="section-title">Contacto</h2>
        <p class="intro">¿Querés venir a probar o tenés alguna consulta? Escribinos por cualquiera de estos medios.</p>

        <ul class="channels">
          @for (channel of channels; track channel.label) {
            <li>
              <a
                class="channel"
                [href]="channel.href"
                [attr.target]="channel.external ? '_blank' : null"
                [attr.rel]="channel.external ? 'noopener' : null"
              >
                <span class="icon"><app-icon [name]="channel.icon" /></span>
                <span class="text">
                  <span class="label">{{ channel.label }}</span>
                  <span class="value">{{ channel.value }}</span>
                </span>
              </a>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .intro {
      color: var(--sand);
    }

    .channels {
      display: grid;
      gap: 12px;
      margin: 24px 0 0;
      padding: 0;
      list-style: none;
    }

    .channel {
      display: flex;
      align-items: center;
      gap: 14px;
      min-height: 64px;
      padding: 12px 16px;
      border: 1px solid rgb(250 243 225 / 15%);
      border-radius: var(--radius);
      text-decoration: none;
      transition: border-color 0.15s ease;

      &:hover {
        border-color: var(--orange);
      }
    }

    .icon {
      display: grid;
      flex-shrink: 0;
      place-items: center;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: var(--orange);
      color: var(--ink);
      font-size: 18px;
    }

    .text {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }

    .label {
      font-family: var(--font-display);
      font-size: 0.8rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--orange);
    }

    .value {
      overflow: hidden;
      font-weight: 600;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `,
})
export class Contact {
  protected readonly channels: ContactChannel[] = [
    {
      icon: 'whatsapp',
      label: 'WhatsApp',
      value: 'Envianos un mensaje',
      href: LINKS.whatsapp,
      external: true,
    },
    {
      icon: 'instagram',
      label: 'Instagram',
      value: `@${SITE.contact.instagram}`,
      href: LINKS.instagram,
      external: true,
    },
    {
      icon: 'email',
      label: 'Email',
      value: SITE.contact.email,
      href: LINKS.email,
      external: false,
    },
  ];
}
