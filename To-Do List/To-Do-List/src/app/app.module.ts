import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


import { AppRoutingModule } from './app-routing.module';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './weekmemory';

import { AppComponent }  from './app.component';
import { WeeklyComponent }   from './weekly.components';
import { CategoryComponent } from './category.components';
import { weekservice } from './week.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
     ],
  declarations: [ 
    AppComponent,
    WeeklyComponent,
    CategoryComponent
    ],
  providers: [ weekservice ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
