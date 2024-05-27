import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Donut } from '../../interfaces/donut';

@Component({
  selector: 'app-donut-item',
  templateUrl: './donut-item.component.html',
  styleUrls: ['./donut-item.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class DonutItemComponent {
  @Input() donut!: Donut;
}

