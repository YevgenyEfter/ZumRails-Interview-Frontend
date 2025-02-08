import { Component, Input } from '@angular/core';
import { PokemonResult } from '../../models/pokemon-result';

@Component({
  selector: 'app-pokemon-result',
  templateUrl: './pokemon-result.component.html',
  styleUrl: './pokemon-result.component.css',
})
export class PokemonResultComponent {
  @Input()
  public pokemonResult!: PokemonResult;
}
