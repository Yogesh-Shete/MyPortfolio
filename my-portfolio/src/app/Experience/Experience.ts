import { Component } from '@angular/core';

interface Experience {
    role: string;
    company: string;
    duration: string;
    description: string;
    subRoles?: { title: string; period: string }[];
}

@Component({
    selector: 'app-experience',
    templateUrl: './Experience.html',
    styleUrls: ['./Experience.scss']
})

export class ExperienceComponent {

    experiences: Experience[] = [
        {
            role: 'Software Engineer',
            company: 'Yardi Software India Pvt. Ltd.',
            duration: 'July 2024 – Present',
            subRoles: [
                {
                    title: 'Software Engineer',
                    period: 'Jan 2025 – Present'
                },
                {
                    title: 'Software Engineer Trainee',
                    period: 'July 2024 – Jan 2025'
                }
            ],
            description: 'Contributing to enterprise-scale Angular applications, building reusable UI components, and enhancing performance.'
        },
        {
            role: 'Summer Intern',
            company: 'Persistent Systems Ltd.',
            duration: '2023 – 2024',
            description: 'Designed responsive web interfaces, integrated REST APIs, and optimized frontend performance using Angular.'
        }
    ];

}