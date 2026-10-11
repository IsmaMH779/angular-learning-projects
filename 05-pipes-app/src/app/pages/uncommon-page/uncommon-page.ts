import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';

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
  imports: [Card, I18nSelectPipe, I18nPluralPipe],
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
}
