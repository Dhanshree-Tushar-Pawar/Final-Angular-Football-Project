import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountryNames } from 'src/app/interface/country-names';
import { GlobalConstants } from 'src/constants/global-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title: string = GlobalConstants.appTitle;

  countries: Array<CountryNames> = [
    { id: 1, name: GlobalConstants.countryEngland },
    { id: 2, name: GlobalConstants.countrySpain },
    { id: 3, name: GlobalConstants.countryGermany },
    { id: 4, name: GlobalConstants.countryFrance },
    { id: 5, name: GlobalConstants.countryItaly },
  ];

  @Output() countryEvent = new EventEmitter<string>();
  @Input() activeCountryName: string = '';

  constructor(
  ) { }

  shareCountryName(country: string): void {
    this.countryEvent.emit(country)
  }
}
