import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonResultsListComponent } from './pokemon-results-list.component';

describe('PokemonResultsListComponent', () => {
  let component: PokemonResultsListComponent;
  let fixture: ComponentFixture<PokemonResultsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonResultsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
