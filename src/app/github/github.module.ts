import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GithubComponent } from './github.component';
import { GithubService } from './github.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        GithubComponent,
    ],
    exports: [
        GithubComponent,
    ],
    providers: [
        GithubService,
    ],
})
export class GithubModule { }
