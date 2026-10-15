import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from './shared/components/side-menu/side-menu';

@Component({
  imports: [RouterOutlet, SideMenu],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('reactive-forms-app');
}
