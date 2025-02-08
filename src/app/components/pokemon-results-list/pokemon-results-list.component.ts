import { Component, Input } from '@angular/core';
import { PokemonResult } from '../../models/pokemon-result';

@Component({
  selector: 'app-pokemon-results-list',
  templateUrl: './pokemon-results-list.component.html',
  styleUrl: './pokemon-results-list.component.css',
})
export class PokemonResultsListComponent {
  @Input()
  public pokemonResults?: PokemonResult[];
}
