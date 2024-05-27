import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donut } from '../interfaces/donut';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private apiUrl = 'https://grandcircusco.github.io/demo-apis/donuts.json';

  constructor(private http: HttpClient) {}

  getDonuts(): Observable<Donut[]> {
    return this.http.get<Donut[]>(this.apiUrl);
  }
}
