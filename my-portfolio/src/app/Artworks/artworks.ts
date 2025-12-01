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

  isMobileView = false;
  private mobileBreakpoint = 600;

  artworks: Artwork[] = [
    {
      id: 'art1',
      title: 'Beautiful Couple',
      refSrc: 'assets/Artworks/Couple1_Ref.jpg',
      actualSrc: 'assets/Artworks/Couple1.jpg',
      thumbSrc: 'assets/Artworks/Couple1.jpg',
      year: '2025',
      medium: 'Pencil on Paper'
    },
    {
      id: 'art2',
      title: 'Girl Portrait',
      refSrc: 'assets/Artworks/Solo_Girl2_Ref.png',
      actualSrc: 'assets/Artworks/Solo_Girl2.jpg',
      thumbSrc: 'assets/Artworks/Solo_Girl2.jpg',
      year: '2025',
      medium: 'Pencil on Paper'
    }
  ];

  showModal = false;
  selectedIndex = -1;

  constructor(private router: Router) {

  }

  openModal(index: number) {
    this.selectedIndex = index;
    this.showModal = true;
    document.body.style.overflow = this.isMobileView ? '' : 'hidden';
    setTimeout(() => {
      const closeBtn = document.querySelector<HTMLButtonElement>('.modal__close-btn');
      closeBtn?.focus();
    }, 0);
  }

  // artworks.component.ts (add inside the component class)
  modalImageSrc(): string {
    const art = this.artworks?.[this.selectedIndex];
    if (!art) return '';

    // On mobile prefer the actual (full) artwork image.
    if (this.isMobileView) {
      return art.actualSrc || art.thumbSrc || art.refSrc || '';
    }

    // Desktop: prefer reference/thumb when available.
    return art.refSrc || art.thumbSrc || art.actualSrc || '';
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

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobileView = window.innerWidth < this.mobileBreakpoint;
    console.log('isMobileView:', this.isMobileView);
  }
}