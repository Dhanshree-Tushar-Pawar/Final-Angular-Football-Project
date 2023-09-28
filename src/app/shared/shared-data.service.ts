import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private countryData = new BehaviorSubject<number>(0);
  selectedcountryData = this.countryData.asObservable();
  
  constructor() { }

  setCountry(country: number): void {
    this.countryData.next(country);
  }
  
}
