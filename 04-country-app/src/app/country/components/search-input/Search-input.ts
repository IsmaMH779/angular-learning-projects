import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './Search-input.html',
})
export class SearchInput {

  placeholder = input('Search');
  value = output<string>();

}
