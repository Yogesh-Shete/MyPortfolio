import { Component } from '@angular/core';

@Component({
    selector: 'app-homepage',
    templateUrl: './Homepage.html',
    styleUrls: ['./Homepage.css']
})

export class Homepage {
    menuOpen = false;

    // New typing effect variables
    titles: string[] = ['Developer', 'Engineer', 'Designer', 'Creator'];
    displayedText = '';
    private currentTitleIndex = 0;
    private isDeleting = false;
    private typingSpeed = 120; // ms per character

    ngOnInit(): void {
        this.typeEffect();
    }

    // Your existing methods (like toggleMenu) stay untouched

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

    private typeEffect(): void {
        const currentTitle = this.titles[this.currentTitleIndex];
        const fullText = currentTitle;

        if (this.isDeleting) {
            this.displayedText = fullText.substring(0, this.displayedText.length - 1);
        } else {
            this.displayedText = fullText.substring(0, this.displayedText.length + 1);
        }

        let speed = this.typingSpeed;

        if (!this.isDeleting && this.displayedText === fullText) {
            speed = 1500; // pause before deleting
            this.isDeleting = true;
        } else if (this.isDeleting && this.displayedText === '') {
            this.isDeleting = false;
            this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
            speed = 500;
        }

        setTimeout(() => this.typeEffect(), speed);
    }

}