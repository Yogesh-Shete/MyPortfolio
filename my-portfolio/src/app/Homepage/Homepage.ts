import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-homepage',
    templateUrl: './Homepage.html',
    styleUrls: ['./Homepage.css']
})

export class Homepage {
    // New typing effect variables
    titles: string[] = ['Yogesh', 'Engineer', 'Developer', 'Artist'];
    displayedText = '';
    isExpanded = false;
    isMobileView = false;
    private mobileBreakpoint = 600;

    private currentTitleIndex = 0;
    private isDeleting = false;
    private typingSpeed = 120; // ms per character

    constructor(private Router: Router) {
        this.checkScreenSize();
    }

    ngOnInit(): void {
        this.typeEffect();
    }

    // Your existing methods (like toggleMenu) stay untouched


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



    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
        this.checkScreenSize();
    }

    checkScreenSize() {
        this.isMobileView = window.innerWidth < this.mobileBreakpoint;
        console.log('isMobileView:', this.isMobileView);
    }

    toggleExpanded(flag: boolean) {
        this.isExpanded = flag;
    }


}