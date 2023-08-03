import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent {
  ngOnInit() {
    const navbar = document.querySelector('.navbar');
    const navHeight = navbar?.getBoundingClientRect().height;
    const home = document.querySelector('app-home');
    if (navbar && navHeight && home) {
      const headerObserver: IntersectionObserver = new IntersectionObserver(
        this.stickyNav,
        {
          root: null,
          threshold: 0,
          rootMargin: `${-6 * navHeight}px`,
        }
      );
      headerObserver.observe(home);
    }
  }

  stickyNav = function (entries: IntersectionObserverEntry[]) {
    const [entry] = entries;
    if (!entry.isIntersecting)
      document.querySelector('.navbar')?.classList.add('fixed-top');
    else document.querySelector('.navbar')?.classList.remove('fixed-top');
  };
}
