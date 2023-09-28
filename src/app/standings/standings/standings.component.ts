import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interface/country';
import { CountryNames } from 'src/app/interface/country-names';
import { Standings } from 'src/app/interface/standings';
import { FootballUpdatesService } from 'src/app/services/football-updates.service';
import { SharedDataService } from 'src/app/shared/shared-data.service';
import { GlobalConstants, TopEuropeanLeagues } from 'src/constants/global-constants';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  headers: string[] = GlobalConstants.tableHeadings;
  allStandings: Standings[] = [];
  countryName: string = '';
  selectCountry: string = '';
  latestSeason: string = (new Date().getFullYear()).toString();
  countriesList: Country[] = [];
  countryCode: string = '';
  filteredData: Country[] = [];
  countries: Array<CountryNames> = [
    { id: 1, name: GlobalConstants.countryEngland },
    { id: 2, name: GlobalConstants.countrySpain },
    { id: 3, name: GlobalConstants.countryGermany },
    { id: 4, name: GlobalConstants.countryFrance },
    { id: 5, name: GlobalConstants.countryItaly },
  ];
  selectedCountry: Country[] = [];

  constructor(
    private footballUpdatesService: FootballUpdatesService,
    private sharedDataService: SharedDataService
  ) { }

  ngOnInit(): void {
    const countries = sessionStorage.getItem('countries');
    this.initialisedStandings();
  }

  receiveCountry($event: string): void {
    this.countryName = $event;
    this.selectCountry = this.countryName;
    this.getTopMostLeagueCountries();
  }

  getTopMostLeagueCountries() {
    this.footballUpdatesService
      .getCountriesData().subscribe((data: any) => {
        this.countriesList = data['response'].filter((country: Country) => {
          return Object.keys(TopEuropeanLeagues).indexOf(country.name) !== -1;
        });
        this.filteredData = data['response'].filter((country: Country) => country.name === this.countryName);
        sessionStorage.setItem('countries', JSON.stringify(this.countriesList));
        this.initialisedStandings();
        this.getCountryLeagueId();
      }), (err: Error) => { console.log(err) };
  }

  initialisedStandings() {
    // this.selectedCountry = this.countriesList[0];
  }

  getCountryLeagueId(): void {
    const selectedCountry: string = this.countryName;
    const leagueName: string = GlobalConstants.countries[selectedCountry] as string;
    const countryCode: string = this.filteredData[0].code;

    this.footballUpdatesService.getLeaguesIdData(countryCode, this.latestSeason, leagueName, this.countryName)
      .subscribe((data: any) => {
        const leagueId: number = data['response'][0]?.league.id;
        JSON.stringify(leagueId);
        this.sharedDataService.setCountry(leagueId);
        this.getLeagueStandings((leagueId).toString(), this.latestSeason);
      }), (err: Error) => { console.log(err) };
  }

  getLeagueStandings(leagueId: string, currentSeason: string): void {
    this.footballUpdatesService
      .getStandingsData(leagueId, currentSeason)
      .subscribe((data: any) => {
        this.allStandings = data['response'][0]?.league?.standings[0];
        JSON.stringify(this.allStandings);
      }), (err: Error) => { console.log(err) };
  }

}
