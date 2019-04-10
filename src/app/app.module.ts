import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ParallaxDirective } from './directive/parallax.directive';
import { SkillsComponent } from './component/skills/skills.component';
import { HeaderComponent } from './component/header/header.component';
import { ExperienceComponent } from './component/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ParallaxDirective,
    SkillsComponent,
    HeaderComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
