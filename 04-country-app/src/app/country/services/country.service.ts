import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { map, Observable, catchError, throwError, delay } from 'rxjs';
import type { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';
import { mapToCanActivate } from '@angular/router';

const API_URL = "https://restcountries.com/v3.1"


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);


  searchBycapital(query: string): Observable<Country[]> {
    query = query.toLocaleLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
    .pipe(
      map( resp => CountryMapper.mapRestCountyArrayToCountryArray(resp)),
      catchError(error => {
        console.log('Error fetching', error);

        return throwError(() => new Error('No countries found with this query.'));
      })
    );
  }


  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLocaleLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
    .pipe(
      map( resp => CountryMapper.mapRestCountyArrayToCountryArray(resp)),
      delay(3000),
      catchError(error => {
        console.log('Error fetching', error);

        return throwError(() => new Error('No countries found with this query.'));
      })
    );
  }



  searchCountryByAlphaCode(code: string) {
    const url =`${API_URL}/alpha/${code}`;

    return this.http.get<RESTCountry[]>(url)
    .pipe(

      map( resp => CountryMapper.mapRestCountyArrayToCountryArray(resp)),

      map( countries => countries.at(0)),

      catchError(error => {
        console.log('Error fetching', error);

        return throwError(() => new Error(`No country found with this code: ${code}`));
      })
    );

  }



}
