import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy {
  isHome = true;
  private sub = new Subscription();
  title = 'my-portfolio';

  constructor(private router: Router) {
    // Set initial state in case the app started on a non-root URL
    // router.url gives the current url (e.g. '/', '/new', '/about')
    this.isHome = this.isHomeRoute(this.router.url);

    // Subscribe only to NavigationEnd events and update isHome
    const s = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(ev => {
        this.isHome = this.isHomeRoute(ev.urlAfterRedirects);
        // ensure top of page on navigation
        window.scrollTo(0, 0);
      });

    this.sub.add(s);
  }

  private isHomeRoute(url: string | null): boolean {
    if (!url) return true;
    // Normalize and check for exactly root or root with fragment e.g. /#projects
    // url could be '/','/','/new', '/#projects', '/?q=..' etc.
    // We treat '/' and '/' + fragment/query as home.
    const u = url.split('?')[0].split('#')[0]; // strip query and fragment
    return u === '' || u === '/';
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
