import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/reducer';
import { selectError, selectStats } from './store/selectors';
import { Subject, takeUntil } from 'rxjs';
import { PokemonResult } from './models/pokemon-result';
import { getStats } from './store/actions';
import { SortType } from './models/sort-type';
import { SortDirection } from './models/sort-direction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'Pokemon Tournament Statistics';
  public stats: PokemonResult[] | undefined;
  public errorMessage: string | undefined;

  private destroy$ = new Subject<void>();

  public constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.store
      .select(selectStats)
      .pipe(takeUntil(this.destroy$))
      .subscribe((stats) => {
        this.stats = stats;
      });

    this.store
      .select(selectError)
      .pipe(takeUntil(this.destroy$))
      .subscribe((errorMessage) => {
        this.errorMessage = errorMessage;
      });

    this.store.dispatch(
      getStats({
        sortBy: SortType.Wins,
        sortDirection: SortDirection.Ascending,
      })
    );
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }
}
