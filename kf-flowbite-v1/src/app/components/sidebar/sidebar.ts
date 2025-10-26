import { Component, AfterViewInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.html',
    styleUrls: ['./sidebar.css'],
})
export class Sidebar implements AfterViewInit, OnDestroy {
    private onClickHandler: (() => void) | null = null;

    constructor(@Inject(DOCUMENT) private document: Document) {}

    ngAfterViewInit(): void {
        const themeToggleDarkIcon = this.document.getElementById('theme-toggle-dark-icon') as HTMLElement | null;
        const themeToggleLightIcon = this.document.getElementById('theme-toggle-light-icon') as HTMLElement | null;
        const themeToggleBtn = this.document.getElementById('theme-toggle') as HTMLElement | null;

        if (!themeToggleBtn || !themeToggleDarkIcon || !themeToggleLightIcon) {
            // elementos não encontrados — não faz nada
            return;
        }

        // Inicializa os ícones com base no localStorage ou preferência do sistema
        const stored = localStorage.getItem('color-theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (stored === 'dark' || (!stored && prefersDark)) {
            themeToggleLightIcon.classList.remove('hidden');
            themeToggleDarkIcon.classList.add('hidden');
        } else {
            themeToggleDarkIcon.classList.remove('hidden');
            themeToggleLightIcon.classList.add('hidden');
        }

        this.onClickHandler = () => {
            // alterna ícones
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');

            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    this.document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    this.document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }

            } else {
                if (this.document.documentElement.classList.contains('dark')) {
                    this.document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                } else {
                    this.document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            }
        };

        themeToggleBtn.addEventListener('click', this.onClickHandler);
    }

    ngOnDestroy(): void {
        if (this.onClickHandler) {
            const themeToggleBtn = this.document.getElementById('theme-toggle') as HTMLElement | null;
            if (themeToggleBtn) {
                themeToggleBtn.removeEventListener('click', this.onClickHandler);
            }
            this.onClickHandler = null;
        }
    }
}
