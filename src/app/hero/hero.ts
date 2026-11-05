import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../icon/icon';
import { scrollToSection } from '../scroll-to';
import { LINKS, SITE } from '../site-content';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <section id="inicio" class="hero section section--dark">
      <div class="container">
        <img class="logo" src="img/logo-night-3.png" [alt]="'Logo ' + site.name" width="600" height="382" />
        <h1>{{ site.name }}</h1>
        <p class="tagline">{{ site.tagline }}</p>
        <div class="actions">
          <a class="btn btn--primary btn--block" [href]="links.whatsapp" target="_blank" rel="noopener">
            <app-icon name="whatsapp" /> Quiero empezar
          </a>
          <a class="btn btn--outline btn--block" href="#nosotros" (click)="scrollTo($event, 'nosotros')">
            Conocé la escuela
          </a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .hero {
      position: relative;
      overflow: hidden;
      padding-block: 40px 64px;
      text-align: center;
      // Anillos de diana sutiles de fondo
      background:
        repeating-radial-gradient(circle at 50% 38%, transparent 0 34px, rgb(250 243 225 / 4%) 34px 36px),
        var(--ink);
    }

    .logo {
      width: min(100%, 420px);
      height: auto;
      margin: 0 auto 24px;
    }

    h1 {
      font-size: clamp(1.8rem, 7vw, 2.6rem);
      text-transform: uppercase;
    }

    .tagline {
      max-width: 34ch;
      margin: 0 auto 28px;
      color: var(--sand);
      font-size: 1.05rem;
    }

    .actions {
      display: grid;
      gap: 12px;
      max-width: 360px;
      margin-inline: auto;
    }
  `,
})
export class Hero {
  protected readonly site = SITE;
  protected readonly links = LINKS;
  protected readonly scrollTo = scrollToSection;
}
