import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HallOfFameService } from '../../services/hall-of-fame.service';
import { FamousPerson } from '../../interfaces/famous-person';
import { FamousPersonRowComponent } from '../famous-person-row/famous-person-row.component';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, FamousPersonRowComponent],
  providers: [HallOfFameService]
})
export class FamousPeopleComponent implements OnInit {
  famousPeople: FamousPerson[] = [];

  constructor(private hallOfFameService: HallOfFameService) {}

  ngOnInit(): void {
    this.hallOfFameService.getFamousPeople().subscribe((data) => {
      this.famousPeople = data.filter((person) => person.isFamous);
    });
  }
}
