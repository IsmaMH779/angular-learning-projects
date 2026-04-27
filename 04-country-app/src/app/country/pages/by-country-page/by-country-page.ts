import { Component, inject, resource, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/Search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {
  private countryService = inject(CountryService);

  query = signal('');

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {

      if ( !params.query ) return of([]);

      return this.countryService.searchByCountry(params.query)
    }
  });


  /*
    countryResource = resource({
    params: () => ({ query: this.query() }),
    loader: async({ params }) => {

      if ( !params.query ) return [];

      return await firstValueFrom(
        this.countryService.searchByCountry(params.query)
      )
    }
  });
  */

}
