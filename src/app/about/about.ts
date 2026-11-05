import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../icon/icon';
import { SITE } from '../site-content';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <section id="nosotros" class="section">
      <div class="container">
        <span class="eyebrow">La escuela</span>
        <h2 class="section-title">Sobre nosotros</h2>
        @if (site.groupPhoto; as photo) {
          <img class="group-photo" [src]="photo.src" [alt]="photo.alt" width="1200" height="675" loading="lazy" />
        }
        <p class="lead">{{ site.about }}</p>

        <ul class="highlights">
          @for (item of site.highlights; track item.title) {
            <li>
              <app-icon name="target" />
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
              </div>
            </li>
          }
        </ul>

        <div class="schedule">
          <h3><app-icon name="clock" /> Horarios</h3>
          <dl>
            @for (slot of site.schedule; track slot.day) {
              <div>
                <dt>{{ slot.day }}</dt>
                <dd>{{ slot.hours }}</dd>
              </div>
            }
          </dl>
        </div>
      </div>
    </section>
  `,
  styles: `
    .group-photo {
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 9;
      margin-bottom: 20px;
      border-radius: var(--radius);
      object-fit: cover;
      box-shadow: var(--shadow);
    }

    .lead {
      font-size: 1.05rem;
      color: var(--ink-soft);
    }

    .highlights {
      display: grid;
      gap: 12px;
      margin: 28px 0;
      padding: 0;
      list-style: none;

      li {
        display: flex;
        gap: 14px;
        align-items: flex-start;
        padding: 16px;
        border-radius: var(--radius);
        background: var(--sand);
        color: var(--orange-dark);
        font-size: 1.3rem;
      }

      h3 {
        margin-bottom: 4px;
        font-size: 1.1rem;
        color: var(--ink);
      }

      p {
        margin: 0;
        font-size: 0.95rem;
        color: var(--ink-soft);
      }
    }

    .schedule {
      padding: 20px;
      border-radius: var(--radius);
      background: var(--ink);
      color: var(--cream);

      h3 {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1.3rem;
        text-transform: uppercase;
        color: var(--orange);
      }

      dl {
        margin: 0;
      }

      div {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        padding-block: 10px;
        border-top: 1px solid rgb(250 243 225 / 15%);
      }

      dd {
        margin: 0;
        font-weight: 600;
        white-space: nowrap;
      }
    }
  `,
})
export class About {
  protected readonly site = SITE;
}
