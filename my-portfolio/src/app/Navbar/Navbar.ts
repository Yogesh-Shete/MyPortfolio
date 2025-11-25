import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './Navbar.html',
  styleUrls: ['./Navbar.scss']
})
export class NavbarComponent {
  @ViewChild('navRef') navRef!: ElementRef<HTMLElement>;

  menuOpen = false;

  constructor(private router: Router) { }

  // Toggle triggered by hamburger. stopPropagation prevents document listener from immediately closing it.
  toggleMenu(event?: Event) {
    event?.stopPropagation();
    this.menuOpen = !this.menuOpen;
  }

  // Called when clicking a menu item in the mobile nav (closes the menu and scrolls)
  menuItemClick(sectionId: string) {
    this.menuOpen = false;
    this.scrollToSection(sectionId);
  }

  scrollToSection(sectionId: string) {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = -70; // adjust as needed
        const y = element.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 200);
  }

  navigateToArtwork() {
    this.menuOpen = false;
    this.router.navigate(['/artworks']);
  }

  closeMenu() {
    this.menuOpen = false;
  }

  // Global click listener: if click is outside navRef, close menu.
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.menuOpen) return;

    const clickedInsideNav = this.navRef?.nativeElement?.contains(event.target as Node);
    if (!clickedInsideNav) {
      this.menuOpen = false;
    }
  }

  // Optional: close on ESC key
  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent) {
    if (this.menuOpen) this.menuOpen = false;
  }
}
