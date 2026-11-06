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
          @for (group of site.schedule; track group.day) {
            <details>
              <summary>
                <span class="day">{{ group.day }}</span>
                <span class="hours">{{ group.hours }}</span>
                <span class="chevron"><app-icon name="chevron-right" /></span>
              </summary>
              <ul class="slots">
                @for (slot of group.slots; track slot) {
                  <li>{{ slot }}</li>
                }
              </ul>
            </details>
          }
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

      details {
        border-top: 1px solid rgb(250 243 225 / 15%);
      }

      summary {
        display: flex;
        align-items: center;
        gap: 12px;
        padding-block: 10px;
        cursor: pointer;
        list-style: none;

        &::-webkit-details-marker {
          display: none;
        }
      }

      .day {
        flex: 1;
        min-width: 0;
      }

      .hours {
        font-weight: 600;
        white-space: nowrap;
      }

      .chevron {
        display: inline-flex;
        color: var(--orange);
        transition: transform 0.2s ease;
      }

      details[open] .chevron {
        transform: rotate(90deg);
      }

      .slots {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 0;
        padding: 0 0 14px;
        list-style: none;

        li {
          padding: 4px 12px;
          border: 1px solid var(--orange);
          border-radius: 999px;
          background: rgb(250 243 225 / 6%);
          font-size: 0.9rem;
          font-weight: 600;
          white-space: nowrap;
        }
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .schedule .chevron {
        transition: none;
      }
    }
  `,
})
export class About {
  protected readonly site = SITE;
}
