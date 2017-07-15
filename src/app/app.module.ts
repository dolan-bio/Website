import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { FooterComponent } from './footer/footer.component';
import { GithubModule } from './github/github.module';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ResumeComponent } from './resume/resume.component';
import { SkillsModule } from './skills/skills.module';
import { SummaryComponent } from './summary/summary.component';
import { ThreeDComponent } from './three-d/three-d.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ContactDetailsComponent,
        SummaryComponent,
        ResumeComponent,
        FooterComponent,
        HeroComponent,
        ThreeDComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        SkillsModule,
        GithubModule,
        PortfolioModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
