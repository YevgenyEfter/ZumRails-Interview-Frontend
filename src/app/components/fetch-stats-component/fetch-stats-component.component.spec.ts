import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchStatsComponentComponent } from './fetch-stats-component.component';

describe('FetchStatsComponentComponent', () => {
  let component: FetchStatsComponentComponent;
  let fixture: ComponentFixture<FetchStatsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FetchStatsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchStatsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
