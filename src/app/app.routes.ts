import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { CoursesComponent } from './pages/courses/courses';
import { AboutComponent } from './pages/about/about';
import { LecturesComponent } from './lectures/lectures';
import { SubscriptionComponent } from './subscription/subscription';
import {NotFoundComponent} from './pages/not-found/not-found';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'about', component: AboutComponent },
  {path: 'lectures', component: LecturesComponent},
  {path: 'subscription', component: SubscriptionComponent},
  { path: '**', component: NotFoundComponent },
];
