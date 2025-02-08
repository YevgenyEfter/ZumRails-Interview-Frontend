import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonResult } from '../models/pokemon-result';
import { Observable } from 'rxjs';
import { SortType } from '../models/sort-type';
import { SortDirection } from '../models/sort-direction';

const BASE_API_URL = 'https://localhost:7068/pokemon/tournament/statistics';

@Injectable({
  providedIn: 'root',
})
export class PokemonStatsService {
  constructor(private http: HttpClient) {}

  public getStats(
    sortBy: SortType,
    sortDirection: SortDirection
  ): Observable<PokemonResult[]> {
    const params = new HttpParams()
      .set('sortBy', sortBy)
      .set('sortDirection', sortDirection);

    return this.http.get<PokemonResult[]>(BASE_API_URL, { params });
  }
}
