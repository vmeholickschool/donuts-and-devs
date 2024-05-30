import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donut, DonutResponse } from '../interfaces/donut';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  getDonutById(id: string | null) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://grandcircusco.github.io/demo-apis/donuts.json';

  constructor(private http: HttpClient) {}
  

  getDonuts(): Observable<DonutResponse> {
    return this.http.get<DonutResponse>(this.apiUrl);
  }
}
