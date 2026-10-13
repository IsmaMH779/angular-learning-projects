import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { interval, tap } from 'rxjs';

const client1 = {
  name: 'Nacho',
  gender: 'male',
  age: '27',
  address: 'Badalona, Barcelona'
}

const client2 = {
  name: 'Clara',
  gender: 'female',
  age: '24',
  address: 'Llefia, Barcelona'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {

  // i18n slect
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2)

      return
    }

    if (this.client() === client2) {
      this.client.set(client1)

      return
    }
  }

  deleteClient() {
    this.clients.update( prev => prev.slice(1));
  }


  // I18n Plural

  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos cliente esperando',
    other: 'tenemos # clientes esperando',
  });

  clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Melissa',
    'Natalia',
    'Andrea',
    'Juan',
    'Carlos',
  ])

  profile = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada',
  };

  // AsyncPipe

  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Tenemos error en la promesa.')
      console.log('Promesa finalizada')
    }, 3500)
  })

  myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );
}
