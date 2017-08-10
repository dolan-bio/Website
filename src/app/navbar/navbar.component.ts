import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Rx';

interface IMenuItem {
    title: string;
    link: string;
}

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
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

    constructor() {
        this.whenUserScrolledPast = new Observable<boolean>((observer) => {
            const navHeight = this.nav.nativeElement.offsetHeight;
            document.addEventListener('scroll', (e) => {
                if (document.body.scrollTop > window.innerHeight - navHeight) {
                    observer.next(true);
                } else {
                    observer.next(false);
                }
            }, true);
        });
    }

    public ngOnInit(): void {
    }

}
