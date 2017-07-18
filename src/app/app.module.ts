import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { FooterComponent } from './footer/footer.component';
import { GithubModule } from './github/github.module';
import { HeroModule } from './hero/hero.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ResumeModule } from './resume/resume.module';
import { SkillsModule } from './skills/skills.module';
import { SummaryComponent } from './summary/summary.component';
import { ThreeDComponent } from './three-d/three-d.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ContactDetailsComponent,
        SummaryComponent,
        FooterComponent,
        ThreeDComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        SkillsModule,
        GithubModule,
        PortfolioModule,
        HeroModule,
        ResumeModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
