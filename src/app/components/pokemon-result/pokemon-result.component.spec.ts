import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonResultComponent } from './pokemon-result.component';

describe('PokemonResultComponent', () => {
  let component: PokemonResultComponent;
  let fixture: ComponentFixture<PokemonResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
