import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameworkComponent } from './framework/framework.component';
import { EducationComponent } from './education/education.component';
// Routing Module to implement navigation
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameworkComponent,
    HomepageComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Navigation Routing
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'education',
        component: EducationComponent
      },
      {
        path: 'experience',
        component: ExperienceComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
