import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DonutsComponent } from './components/donuts/donuts.component';
import { FamousPeopleComponent } from './components/famous-people/famous-people.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', component: DonutsComponent},
      { path: 'donuts', component: DonutsComponent },
      { path: 'famous-people', component: FamousPeopleComponent }
    ]
  }
  
];

export default routes;
