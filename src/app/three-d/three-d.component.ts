import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'app-three-d',
    templateUrl: './three-d.component.html',
    styleUrls: ['./three-d.component.scss']
})
export class ThreeDComponent implements OnInit {

    constructor(private el: ElementRef) {
    }

    public ngOnInit(): void {
    }
}
