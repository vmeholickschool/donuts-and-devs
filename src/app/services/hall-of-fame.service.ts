import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FamousPerson } from '../interfaces/famous-person';

@Injectable({
  providedIn: 'root',
})
export class HallOfFameService {
  private apiUrl = 'https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json';

  constructor(private http: HttpClient) {}

  getFamousPeople(): Observable<FamousPerson[]> {
    return this.http.get<FamousPerson[]>(this.apiUrl);
  }
}
