import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { Icon } from '../icon/icon';
import { NewsItem } from './news-item';

const AUTOPLAY_MS = 6000;
/** Tiempo sin autoplay luego de que el usuario interactúa con el carrusel. */
const INTERACTION_PAUSE_MS = 12000;

@Component({
  selector: 'app-news-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, Icon],
  templateUrl: './news-carousel.html',
  styleUrl: './news-carousel.scss',
})
export class NewsCarousel {
  readonly items = input.required<readonly NewsItem[]>();

  protected readonly current = signal(0);
  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');
  private readonly reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  private hovering = false;
  private pausedUntil = 0;

  constructor() {
    if (this.reducedMotion) return;

    const timer = setInterval(() => this.autoAdvance(), AUTOPLAY_MS);
    inject(DestroyRef).onDestroy(() => clearInterval(timer));
  }

  protected prev(): void {
    this.userInteracted();
    const count = this.items().length;
    this.goTo((this.current() - 1 + count) % count);
  }

  protected next(): void {
    this.userInteracted();
    this.goTo((this.current() + 1) % this.items().length);
  }

  protected select(index: number): void {
    this.userInteracted();
    this.goTo(index);
  }

  protected setHovering(value: boolean): void {
    this.hovering = value;
  }

  protected userInteracted(): void {
    this.pausedUntil = Date.now() + INTERACTION_PAUSE_MS;
  }

  /** Sincroniza el índice actual con el slide más cercano al centro del track. */
  protected onScroll(): void {
    const track = this.track().nativeElement;
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let minDistance = Infinity;

    this.slides().forEach((slide, i) => {
      const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - center);
      if (distance < minDistance) {
        minDistance = distance;
        closest = i;
      }
    });

    this.current.set(closest);
  }

  private goTo(index: number): void {
    const track = this.track().nativeElement;
    const slide = this.slides()[index];
    if (!slide) return;

    // Se usa scrollTo sobre el track (y no scrollIntoView) para no mover la página verticalmente.
    track.scrollTo({
      left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
      behavior: this.reducedMotion ? 'auto' : 'smooth',
    });
    this.current.set(index);
  }

  private autoAdvance(): void {
    if (this.hovering || Date.now() < this.pausedUntil || document.hidden) return;
    const count = this.items().length;
    if (count > 1) this.goTo((this.current() + 1) % count);
  }

  private slides(): HTMLElement[] {
    return Array.from(this.track().nativeElement.children) as HTMLElement[];
  }
}
