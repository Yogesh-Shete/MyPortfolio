import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './Navbar.html',
    styleUrls: ['./Navbar.scss']
})

export class NavbarComponent {

    constructor(private router: Router) { }
    menuOpen = false;

    toggleMenu(sectionId?: string) {
        this.menuOpen = !this.menuOpen;
        if (sectionId) {
            this.scrollToSection(sectionId);
        }
    }

    scrollToSection(sectionId: string) {
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                const offset = -70; // adjust based on your navbar height
                const y = element.getBoundingClientRect().top + window.scrollY + offset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 200);
    }

    navigateToArtwork() {
        this.router.navigate(['/artworks']);
    }

}