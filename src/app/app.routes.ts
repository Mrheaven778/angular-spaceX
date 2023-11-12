import { Routes } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { OldestComponent } from './page/oldest/oldest.component';
import { LaunchComponent } from './page/launch/launch.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { PolicyComponent } from './page/policy/policy.component';

export const routes: Routes = [
  { path: '', component: IndexComponent, title: 'SpaceX Launches' },
  {
    path: 'privacy-policy',
    component: PolicyComponent,
    title: 'Privacy Policy',
  },
  { path: 'oldest', component: OldestComponent, title: 'Oldest' },
  { path: 'launch/:id', component: LaunchComponent, title: 'Launch' },
  { path: '**', component: NotfoundComponent, title: 'Not Found' },
];
