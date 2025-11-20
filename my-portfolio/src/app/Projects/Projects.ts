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
            points: ['Angular components & lazy loading', 'SASS-driven theming', 'Responsive & accessible'],
            tech: ['Angular', 'SCSS', 'TypeScript'],
            live: 'https://your-site.example',
            repo: 'https://github.com/yourname/portfolio'
        },
        {
            id: 2,
            title: 'Task Manager App',
            subtitle: 'Node • Express • MongoDB',
            summary: 'A full-stack task management app with authentication, CRUD, and real-time updates.',
            details: 'Backend API with Express; MongoDB for persistence; JWT auth and role-based permissions; Socket.io for live notifications; Dockerized for deployment.',
            points: ['REST API', 'JWT auth', 'Socket.io notifications'],
            tech: ['Node', 'Express', 'MongoDB'],
            repo: 'https://github.com/yourname/task-manager'
        },
        {
            id: 3,
            title: 'Real-time Chat',
            subtitle: 'React • WebSockets',
            summary: 'A real-time chat interface with channels, typing indicators and file sharing.',
            details: 'Implemented efficient message sync, optimistic UI updates and media uploads with secure presigned URLs.',
            points: ['Channels & groups', 'Typing & read indicators', 'File uploads'],
            tech: ['React', 'WebSocket'],
            live: '',
            repo: ''
        },
        {
            id: 4,
            title: 'Image Processor',
            subtitle: 'Python • OpenCV',
            summary: 'CLI and web tools to process images and detect shapes/faces using OpenCV.',
            details: 'Built Python modules for image augmentation, detection pipelines and a small Flask dashboard for demos.',
            points: ['Image augmentation', 'Face detection', 'Flask dashboard'],
            tech: ['Python', 'OpenCV', 'Flask'],
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