import { Routes } from '@angular/router';
import { DonutsComponent } from './components/donuts/donuts.component';
import { FamousPeopleComponent } from './components/famous-people/famous-people.component';


export const routes: Routes = [
  
    { path: '', redirectTo: 'donuts', pathMatch: 'full' },
  { path: 'donuts', component: DonutsComponent },
  { path: 'famous-people', component: FamousPeopleComponent }
];
  


export default routes;
