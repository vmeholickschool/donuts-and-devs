export interface Donut {
    id: number;
    ref: string;
    photo: string;
    name: string;
  }
  
  export interface DonutResponse {
  count: number;
  results: Donut[];
  }