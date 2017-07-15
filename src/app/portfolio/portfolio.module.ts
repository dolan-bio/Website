import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PortfolioComponent } from './portfolio.component';
import { PortfolioService } from './portfolio.service';

@NgModule({
    imports: [
        CommonModule,
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
