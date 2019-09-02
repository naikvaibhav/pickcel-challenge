import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*import routers modules*/
import { RouterModule } from '@angular/router';

/*import httpclient module*/
import { HttpClientModule } from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DealsService } from './deals.service'

import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

/*importing reverse pipe */
import { ReverseStr } from './reverse-str.pipe';

import { ArrToStr } from './arrtostr.pipe'



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    ReverseStr,
    ArrToStr

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,
    RouterModule.forRoot([
      { path: 'list', component: ListComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'details', component: DetailsComponent }

    ])
  ],
  providers: [DealsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
