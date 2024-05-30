export interface FamousPerson {
    isFamous: unknown;
    firstName: string;
    lastName: string;
    innovation: string;
    year: number;
  }
  
  export interface HallOfFameResponse {
    complete: FamousPerson[];
    filter(arg0: (person: any) => any): FamousPerson[];
    famousPeople: FamousPerson[];
  }