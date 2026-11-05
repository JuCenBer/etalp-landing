import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE } from '../site-content';

@Component({
  selector: 'app-team',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="plantel" class="section section--dark">
      <div class="container">
        <span class="eyebrow">Quiénes nos acompañan</span>
        <h2 class="section-title">Plantel</h2>

        @if (featured.length) {
          <ul class="featured">
            @for (member of featured; track $index) {
              <li class="card">
                <img
                  class="portrait"
                  [class.fallback]="!member.photo"
                  [src]="member.photo?.src ?? 'img/logo-night-3.png'"
                  [alt]="member.photo?.alt ?? ''"
                  width="600"
                  height="600"
                  loading="lazy"
                />
                <div class="card-body">
                  @if (member.nationalTeam) {
                    <span class="badge">Selección Nacional</span>
                  }
                  <h3>{{ member.name }}</h3>
                  <p class="role">{{ member.role }}</p>
                  <details>
                    <summary>Leer biografía</summary>
                    <p>{{ member.bio }}</p>
                  </details>
                </div>
              </li>
            }
          </ul>
        }

        @if (others.length) {
          <ul class="grid">
            @for (member of others; track $index) {
              <li>
                <img
                  class="avatar"
                  [class.fallback]="!member.photo"
                  [src]="member.photo?.src ?? 'img/logo-night-3.png'"
                  [alt]="member.photo?.alt ?? ''"
                  width="240"
                  height="240"
                  loading="lazy"
                />
                <h3>{{ member.name }}</h3>
                <p class="role">{{ member.role }}</p>
              </li>
            }
          </ul>
        }
      </div>
    </section>
  `,
  styles: `
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    h3 {
      margin-bottom: 2px;
      font-size: 1.25rem;
      text-transform: uppercase;
    }

    .role {
      margin: 0;
      font-size: 0.9rem;
      color: rgb(250 243 225 / 70%);
    }

    img.fallback {
      object-fit: contain;
      padding: 14%;
    }

    /* Destacados */
    .featured {
      display: grid;
      gap: 16px;
      margin-bottom: 32px;
    }

    .card {
      overflow: hidden;
      border-radius: var(--radius);
      background: rgb(250 243 225 / 6%);
      border: 1px solid rgb(250 243 225 / 12%);
    }

    .portrait {
      width: 100%;
      height: auto;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      background: rgb(250 243 225 / 4%);
    }

    .card-body {
      padding: 18px 20px 20px;
    }

    .badge {
      display: inline-block;
      margin-bottom: 10px;
      padding: 4px 12px;
      border-radius: 999px;
      background: var(--orange);
      color: var(--ink);
      font-family: var(--font-display);
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    details {
      margin-top: 14px;

      summary {
        cursor: pointer;
        font-weight: 600;
        color: var(--orange);
      }

      p {
        margin: 10px 0 0;
        color: rgb(250 243 225 / 85%);
      }
    }

    /* Resto del plantel */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
      gap: 24px 16px;
      text-align: center;

      h3 {
        font-size: 1rem;
      }
    }

    .avatar {
      width: 112px;
      height: 112px;
      margin: 0 auto 10px;
      border-radius: 50%;
      object-fit: cover;
      background: rgb(250 243 225 / 6%);
      border: 2px solid var(--orange);
    }

    @media (min-width: 640px) {
      .card {
        display: grid;
        grid-template-columns: 220px 1fr;
      }

      .portrait {
        height: 100%;
        aspect-ratio: auto;
      }
    }
  `,
})
export class Team {
  /** Con biografía: tarjeta grande. */
  protected readonly featured = SITE.team.filter((m) => m.bio);
  protected readonly others = SITE.team.filter((m) => !m.bio);
}
