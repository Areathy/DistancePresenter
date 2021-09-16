import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistanceConverterPipe } from './pipes/distance-converter.pipe';
import { TimeConverterPipe } from './pipes/time-converter.pipe';
import { IconDirective } from './directives/icon.directive';

@NgModule({
  declarations: [
    AppComponent,
    DistanceConverterPipe,
    TimeConverterPipe,
    IconDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

