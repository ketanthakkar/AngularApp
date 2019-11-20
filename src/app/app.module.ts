import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';

import { MatGridListModule, MatPaginatorModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { PlanetDetailComponent } from './planets/planet-detail/planet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PlanetListComponent,
    PlanetDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
