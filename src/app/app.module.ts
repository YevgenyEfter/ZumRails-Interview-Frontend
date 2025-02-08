import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './store/reducer';
import { Effects } from './store/effects';
import { PokemonResultComponent } from './components/pokemon-result/pokemon-result.component';
import { PokemonResultsListComponent } from './components/pokemon-results-list/pokemon-results-list.component';
import { FetchStatsComponentComponent } from './components/fetch-stats-component/fetch-stats-component.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorBarComponent } from './components/error-bar/error-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonResultComponent,
    PokemonResultsListComponent,
    FetchStatsComponentComponent,
    HeaderComponent,
    ErrorBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ reducer }),
    EffectsModule.forRoot([Effects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
