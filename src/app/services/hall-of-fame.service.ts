import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HallOfFameResponse } from '../interfaces/famous-person';

@Injectable({
  providedIn: 'root'
})
export class HallOfFameService {
  private apiUrl = 'https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json';

  constructor(private http: HttpClient) {}

  getFamousPeople(): Observable<HallOfFameResponse> {
    return this.http.get<HallOfFameResponse>(this.apiUrl);
  }
}

