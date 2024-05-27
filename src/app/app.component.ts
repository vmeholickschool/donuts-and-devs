import { Component } from '@angular/core';
import { RouterModule,RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { DonutsComponent } from './components/donuts/donuts.component';
import { FamousPeopleComponent } from './components/famous-people/famous-people.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, RouterLink, RouterOutlet, RouterLinkActive, DonutsComponent, FamousPeopleComponent],
})
export class AppComponent {
  title = 'Donuts and Devs';
}
