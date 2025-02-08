import { Component, OnDestroy, OnInit } from '@angular/core';
import { SortType } from '../../models/sort-type';
import { SortDirection } from '../../models/sort-direction';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducer';
import { getStats } from '../../store/actions';
import { Subject, takeUntil } from 'rxjs';
import { selectIsLoading } from '../../store/selectors';

@Component({
  selector: 'app-fetch-stats-component',
  templateUrl: './fetch-stats-component.component.html',
  styleUrl: './fetch-stats-component.component.css',
})
export class FetchStatsComponentComponent implements OnInit, OnDestroy {
  public selectedSortBy: SortType = SortType.Wins;
  public selectedSortDirection: SortDirection = SortDirection.Descending;
  public isLoading: boolean = false;

  private destroy$ = new Subject<void>();

  public constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.store
      .select(selectIsLoading)
      .pipe(takeUntil(this.destroy$))
      .subscribe((isLoading) => {
        this.isLoading = isLoading;
      });

    this.dispatchGetStats();
  }

  public onGetStatisticsClicked(): void {
    this.dispatchGetStats();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }

  private dispatchGetStats(): void {
    this.store.dispatch(
      getStats({
        sortBy: this.selectedSortBy,
        sortDirection: this.selectedSortDirection,
      })
    );
  }
}
