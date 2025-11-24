import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

interface Artwork {
  id: string;
  title: string;
  refSrc: string;    // reference image (source)
  actualSrc: string; // actual artwork image
  thumbSrc?: string; // optional thumbnail (fallback to actualSrc)
  year?: string;
  medium?: string;
}

@Component({
    selector: 'app-artworks',
    templateUrl: './artworks.html',
    styleUrls: ['./artworks.scss']
})


export class ArtworksComponent {
  artworks: Artwork[] = [
    {
      id: 'art1',
      title: 'Beautiful Couple',
      refSrc: 'assets/Couple1_Ref.jpg',
      actualSrc: 'assets/Couple1.jpg',
      thumbSrc: 'assets/Couple1.jpg',
      year: '2025',
      medium: 'Pencil on Paper'
    },
    {
      id: 'art2',
      title: 'Girl Portrait',
      refSrc: 'assets/Solo_Girl2_Ref.png',
      actualSrc: 'assets/Solo_Girl2.jpg',
      thumbSrc: 'assets/Solo_Girl2.jpg',
      year: '2025',
      medium: 'Pencil on Paper'
    },
    // ... add more
  ];

  showModal = false;
  selectedIndex = -1;

  constructor(private router: Router) {}

  openModal(index: number) {
    this.selectedIndex = index;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const closeBtn = document.querySelector<HTMLButtonElement>('.modal__close-btn');
      closeBtn?.focus();
    }, 0);
  }

  closeModal() {
    this.showModal = false;
    this.selectedIndex = -1;
    document.body.style.overflow = '';
  }

  onOverlayClick(ev: MouseEvent) {
    if ((ev.target as HTMLElement).classList.contains('modal__overlay')) {
      this.closeModal();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.showModal) this.closeModal();
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}