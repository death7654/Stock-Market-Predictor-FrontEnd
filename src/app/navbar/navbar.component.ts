import { Component } from '@angular/core';
import { start } from 'repl';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  activeLink = 'home';

  setActive(link: string) {
    this.activeLink = link;
  }

  scrollToTop(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  scrollToPricing() {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  scrollToDiscover() {
    const discoverSection = document.getElementById('discover');
    if (discoverSection) {
      discoverSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToSupMarkets(){
    const supmarkSection = document.getElementById('supmark');
    if (supmarkSection) {
      supmarkSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
