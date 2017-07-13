import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SkillsComponent } from './skills.component';
import { SkillsService } from './skills.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SkillsComponent,
    ],
    providers: [
        SkillsService,
    ],
    exports: [
        SkillsComponent,
    ],
})
export class SkillsModule { }
