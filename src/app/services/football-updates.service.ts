import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Standings } from '../interface/standings';
import { Fixtures } from '../interface/fixtures';
import { Country } from '../interface/country';
import { GlobalConstants } from 'src/constants/global-constants';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FootballUpdatesService {
  constructor(private httpClient: HttpClient) { }

  getCountriesData(): Observable<Country> {
    return this.httpClient.get<Country>(
      `${environment.API_URL}/teams/countries`
    );
  }

  getLeaguesIdData(countryCode: string, season: string, leagueName: string, countryName: string): Observable<Object> {
    const httpParams = new HttpParams()
      .set('code', countryCode)
      .set('season', season)
      .set('name', leagueName)
      .set('country', countryName);
    return this.httpClient.get(`${environment.API_URL}/leagues`, {
      params: httpParams,
    });
  }

  getStandingsData(leagueId: string, season: string): Observable<Standings> {
    const httpParams = new HttpParams()
      .set('league', leagueId)
      .set('season', season);
    return this.httpClient.get<Standings>(`${environment.API_URL}/standings`, {
      params: httpParams,
    });
  }

  getfixturesData(leagueId: number, teamId: string): Observable<Fixtures> {
    const params = new HttpParams()
      .set('league', leagueId)
      .set('team', teamId)
      .set('last', GlobalConstants.ten);
    return this.httpClient.get<Fixtures>(`${environment.API_URL}/fixtures`, {
      params: params,
    });
  }
}
