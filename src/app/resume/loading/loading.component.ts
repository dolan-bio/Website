import { Component, Input, OnInit } from '@angular/core';

interface Line {
    width: number;
}

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
    public lines: Line[];
    @Input() public count: number;

    constructor() {
        this.lines = [];
    }

    public ngOnInit(): void {
        for (let i = 0; i < this.count; i++) {
            const randomPercentage = Math.floor(Math.random() * (100 - 60 + 1) + 60);

            this.lines.push({
                width: randomPercentage,
            })
        }
    }

}
