import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { CoursesComponent } from './pages/courses/courses';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },
];
