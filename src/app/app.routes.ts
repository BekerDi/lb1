import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { CoursesComponent } from './pages/courses/courses';
import { AboutComponent } from './pages/about/about';
import { SubscriptionComponent } from './subscription/subscription';
import { LecturesComponent } from './lectures/lectures';
import {NotFoundComponent} from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'about', component: AboutComponent },
  {path: 'subscription', component: SubscriptionComponent},
  {path:'lectures', component: LecturesComponent},
  { path: '**', component: NotFoundComponent },
];
