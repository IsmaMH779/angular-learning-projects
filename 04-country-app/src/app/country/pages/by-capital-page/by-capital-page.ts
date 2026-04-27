import { Component, inject, signal } from '@angular/core';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

import { SearchInput } from "../../components/search-input/Search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';


@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {
  countryService = inject(CountryService);
  query = signal('');


  // WITH OBSERVABLE

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {

      if ( !params.query ) return of([]);

      return this.countryService.searchBycapital(params.query)

    }
  });

// WITH PROMISE

  /*
    countryResource = resource({
    params: () => ({ query: this.query() }),
    loader: async({ params }) => {

      if ( !params.query ) return [];

      return await firstValueFrom(
        this.countryService.searchBycapital(params.query)
      )
    }
  });
  */


  /*
  isLoading = signal(false);
  isError = signal<string|null>(null);
  countries = signal<Country[]>([])

  onSearch(query: string) {
    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchBycapital(query)
      .subscribe({
        next: (countries) => {
          this.isLoading.set(false);
          this.countries.set(countries);
        },
        error: (err) => {
          this.isLoading.set(false);
          this.countries.set([]);
          this.isError.set(err);
        },
      });
  }
  */
}
