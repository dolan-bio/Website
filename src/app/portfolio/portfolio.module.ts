import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MasonryModule } from 'angular2-masonry';

import { PortfolioComponent } from './portfolio.component';
import { PortfolioService } from './portfolio.service';

@NgModule({
    imports: [
        CommonModule,
        MasonryModule,
    ],
    declarations: [
        PortfolioComponent,
    ],
    providers: [
        PortfolioService,
    ],
    exports: [
        PortfolioComponent,
    ],
})
export class PortfolioModule { }
