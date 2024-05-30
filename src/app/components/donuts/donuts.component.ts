import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DonutService } from '../../services/donut.service';
import { Donut } from '../../interfaces/donut';
import { DonutItemComponent } from '../donut-item/donut-item.component';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, DonutItemComponent],
  providers: [DonutService]
})
export class DonutsComponent implements OnInit {
  donuts: Donut[] = [];

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.donutService.getDonuts().subscribe((data) => {
      this.donuts = data.results;
      
    console.log("response->",this.donuts);  
    });
  }
}

