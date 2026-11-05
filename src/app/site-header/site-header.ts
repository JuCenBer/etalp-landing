import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Icon } from '../icon/icon';
import { scrollToSection } from '../scroll-to';
import { SITE } from '../site-content';

@Component({
  selector: 'app-site-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  host: { '(document:keydown.escape)': 'menuOpen.set(false)' },
})
export class SiteHeader {
  protected readonly site = SITE;
  protected readonly menuOpen = signal(false);
  protected readonly links = [
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'instalaciones', label: 'Instalaciones' },
    { id: 'plantel', label: 'Plantel' },
    { id: 'noticias', label: 'Noticias' },
    { id: 'ubicacion', label: 'Ubicación' },
    { id: 'contacto', label: 'Contacto' },
  ];

  protected go(event: Event, id: string): void {
    this.menuOpen.set(false);
    scrollToSection(event, id);
  }
}
