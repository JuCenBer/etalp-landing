import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Facilities } from './facilities/facilities';
import { Hero } from './hero/hero';
import { Location } from './location/location';
import { News } from './news/news';
import { SiteFooter } from './site-footer/site-footer';
import { SiteHeader } from './site-header/site-header';
import { Team } from './team/team';
import { WhatsappFab } from './whatsapp-fab/whatsapp-fab';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SiteHeader, Hero, About, Facilities, Team, News, Location, Contact, SiteFooter, WhatsappFab],
  template: `
    <app-site-header />
    <main>
      <app-hero />
      <app-about />
      <app-facilities />
      <app-team />
      <app-news />
      <app-location />
      <app-contact />
    </main>
    <app-site-footer />
    <app-whatsapp-fab />
  `,
})
export class App {}
