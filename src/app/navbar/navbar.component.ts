import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CvService } from '../cv/cv.service';

interface IMenuItem {
    title: string;
    link: string;
}

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    public whenUserScrolledPast: Observable<boolean>;
    @ViewChild('nav') public nav: ElementRef;

    public menu: IMenuItem[] = [{
        title: 'Profile',
        link: 'profile',
    }, {
        title: 'Stats',
        link: 'stats',
    }, {
        title: 'Resume',
        link: 'resume',
    }, {
        title: 'Tips',
        link: 'tips',
    }, {
        title: 'Portfolio',
        link: 'portfolio',
    }];

    constructor(private cvService: CvService) {
        this.whenUserScrolledPast = new Observable<boolean>((observer) => {
            const navHeight = this.nav.nativeElement.offsetHeight;

            document.addEventListener('scroll', (e) => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

                if (scrollTop > window.innerHeight - navHeight) {
                    observer.next(true);
                } else {
                    observer.next(false);
                }
            }, true);
        });
    }

    public generateCv(): void {
        this.cvService.Cv$.subscribe();
    }
}
