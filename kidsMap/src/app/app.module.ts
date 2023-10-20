import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SightwordsComponent } from './sightwords/sightwords.component';
import { VowelsComponent } from './vowels/vowels.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    SightwordsComponent,
    VowelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
