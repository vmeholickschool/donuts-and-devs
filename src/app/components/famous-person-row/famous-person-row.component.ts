import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamousPerson } from '../../interfaces/famous-person';

@Component({
  selector: 'app-famous-person-row',
  templateUrl: './famous-person-row.component.html',
  styleUrls: ['./famous-person-row.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class FamousPersonRowComponent {
  @Input() person!: FamousPerson;
}
