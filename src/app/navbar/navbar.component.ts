import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
        title: 'Skills',
        link: 'skills',
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
