// education-section.component.ts
import { Component, HostListener } from '@angular/core';

interface Education {
  id: string | number;
  institutionShort?: string; // short label for tab
  institution: string;
  degree: string;
  duration: string;
  summary: string;
  details?: string;
  topics?: string[];
  courses?: string[];
  cgpa?: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './Education.html',
  styleUrls: ['./Education.scss']
})
export class EducationComponent {
  education: Education[] = [
    {
      id: 'eng',
      institutionShort: 'Engineering',
      institution: 'PES Modern College of Engineering (SPPU)',
      degree: 'B.E. — Computer Engineering',
      duration: '2020 — 2024',
      summary: 'Graduated with CGPA 8.88, focused on software engineering and systems.',
      details:
        'During engineering completed projects in web development, algorithms, interned at companies and collaborated on team projects. Gained practical exposure to real-world engineering workflows.',
      topics: ['DSA', 'OS', 'DBMS', 'Web Dev', 'SQL', 'OOP'],
      courses: ['Data Structures', 'Operating Systems', 'Databases'],
      cgpa: '8.88'
    },
    {
      id: 'junior',
      institutionShort: 'Junior College',
      institution: 'PES Modern College of Arts, Science and Commerce',
      degree: 'HSC — Science (PCM)',
      duration: '2018 — 2020',
      summary: 'Completed Higher Secondary with strong foundation in Physics, Chemistry & Maths.',
      details:
        'Focused on core science subjects with practical labs and project work. Was active in science club and coding workshops. Built fundamentals that helped later in engineering.',
      topics: ['Physics', 'Mathematics', 'Chemistry'],
      courses: ['Advanced Maths', 'Physics Lab'],
      cgpa: '78.77%'
    }
  ];

  selectedIndex = 0;

  // modal state
  modalOpen = false;
  selectedIndexForModal: number | null = null;

  // keyboard nav for tabs
  onTabKeydown(event: KeyboardEvent, index: number) {
    const max = this.education.length - 1;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      const next = index === max ? 0 : index + 1;
      this.select(next);
      this.focusTab(next);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      const prev = index === 0 ? max : index - 1;
      this.select(prev);
      this.focusTab(prev);
    } else if (event.key === 'Home') {
      event.preventDefault();
      this.select(0);
      this.focusTab(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      this.select(max);
      this.focusTab(max);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.select(index);
    }
  }

  select(index: number) {
    this.selectedIndex = index;
  }

  focusTab(index: number) {
    const el = document.getElementById('edu-tab-' + index) as HTMLElement | null;
    el?.focus();
  }

  openDetails(index: number) {
    this.selectedIndexForModal = index;
    this.modalOpen = true;
    // send focus to modal close button for accessibility
    setTimeout(() => {
      const closeBtn = document.querySelector('.edu-modal .modal-close') as HTMLElement | null;
      closeBtn?.focus();
    }, 0);
  }

  closeDetails() {
    this.modalOpen = false;
    this.selectedIndexForModal = null;
  }

  get selectedEducation() {
    return this.selectedIndexForModal !== null ? this.education[this.selectedIndexForModal] : null;
  }

  // close modal on ESC
  @HostListener('window:keydown', ['$event'])
  handleKeydown(ev: KeyboardEvent) {
    if (ev.key === 'Escape' && this.modalOpen) {
      this.closeDetails();
    }
  }
}
