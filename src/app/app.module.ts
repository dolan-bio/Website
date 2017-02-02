import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SummaryComponent } from './summary/summary.component';
import { GithubComponent } from './github/github.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ContactDetailsComponent,
        SummaryComponent,
        GithubComponent,
        ResumeComponent,
        SkillsComponent,
        PortfolioComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
