import { Component, OnInit } from '@angular/core';

interface IMenuItem {
    title: string;
    link: string;
}

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {

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

    constructor() { }

    public ngOnInit(): void {
    }

}
