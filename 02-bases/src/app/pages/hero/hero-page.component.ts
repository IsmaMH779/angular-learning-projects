import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  imports: [ UpperCasePipe ]
})
export class HeroPageComponent {

  name = signal('Ironman')
  age = signal(45)

  heroDescription = computed(() => {
    return `${ this.name() } - ${ this.age() }`;
  })

  capitalizedName = computed(() => this.name().toUpperCase())

  changeHero() {
    this.name.update(() => 'Spiderman');
    this.age.update(() => 22);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.update(() => 60)
  }

}
