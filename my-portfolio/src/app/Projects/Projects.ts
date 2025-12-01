import { Component } from '@angular/core';

export interface Project {
    id: string | number;
    title: string;
    subtitle?: string;
    summary: string;
    details?: string;
    points?: string[];
    tech?: string[];
    live?: string;
    repo?: string;
}

@Component({
    selector: 'app-projects',
    templateUrl: './Projects.html',
    styleUrls: ['./Projects.scss']
})

export class ProjectsComponent {
    projects: Project[] = [
        {
            id: 1,
            title: 'Portfolio Website',
            subtitle: 'Angular • SCSS • Responsive',
            summary: 'A modern portfolio showcasing projects, blog, and contact features with performant animations.',
            details: 'Built the site using Angular with component-driven design. Implemented theme-aware styles, lazy-loaded routes and an accessible UI. Also implemented unit tests and GitHub Actions for CI.',
            points: ['Angular components & lazy loading', 'Responsive & accessible'],
            tech: ['Angular', 'SCSS', 'TypeScript'],
            live: '',
            repo: ''
        },
        {
            id: 2,
            title: 'Movie Recommender System',
            subtitle: 'Angular • Python',
            summary: 'A Conent-Based Movie Recommender Web Application.',
            details: 'Developed a movie recommender system using Angular for the frontend and Python Flask for the backend. Implemented algorithms to suggest movies based on user preferences and viewing history.',
            points: ['Angular', 'Flask', 'Content-Based Filtering'],
            repo: ''
        },
        {
            id: 3,
            title: 'Crowdfunding System',
            subtitle: 'Angular • .Net Core',
            summary: 'A Crowdfuning System for Equity Ventures.',
            details: 'Developed a crowdfunding platform using Angular for the frontend and .Net Core for the backend. Implemented features for project creation, funding management, and user authentication.',
            points: ['Channels & groups', 'Typing & read indicators', 'File uploads'],
            tech: ['Angular', '.net Core', 'SQL Server'],
            live: '',
            repo: ''
        }
        ,{
            id: 4,
            title: 'E-commerce Platform',
            subtitle: 'Angular • .Net Core',
            summary: 'An E-commerce Platform for Online Shopping.',
            details: 'Developed an e-commerce platform using Angular for the frontend and .Net Core for the backend. Implemented features for product listing, shopping cart, payment processing, and user reviews.',
            points: ['Product management', 'Shopping cart', 'Payment integration'],
            tech: ['Angular', '.net Core', 'SQL Server'],
            repo: ''
        }
    ];

    // which index is expanded (-1 none)
    expandedIndex: number = -1;
    // computed max-height (large enough to hold content) used for smooth expand
    detailsMaxHeight = '420px';

    toggleExpand(index: number) {
        this.expandedIndex = this.expandedIndex === index ? -1 : index;
    }

    trackById(index: number, item: Project) {
        return item.id;
    }

}