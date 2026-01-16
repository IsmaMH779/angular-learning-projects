import { Component, inject, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonBallService } from '../../services/dragonball.service';


interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterList, CharacterAddComponent],
})
export class DragonballSuperPageComponent {
  public dragonballService= inject(DragonBallService)
}
