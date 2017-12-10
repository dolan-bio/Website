import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TipsService } from './tips.service';

@Component({
    selector: 'app-tips',
    templateUrl: './tips.component.html',
    styleUrls: ['./tips.component.scss'],
})
export class TipsComponent {
    public whenFetchedTip: Observable<TipModel[]>;

    constructor(tipsService: TipsService) {
        this.whenFetchedTip = tipsService.WhenFetched;
     }

}
