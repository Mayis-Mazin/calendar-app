import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// components
import { HomeComponent } from './home/home.component';
import { EventDetailsComponent } from './event-details/event-details.component';

// calender
import { FullCalendarModule } from '@fullcalendar/angular';
import { DetailsEditComponent } from './event-details/details-edit/details-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponent,
    HomeComponent,
    DetailsEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'event/:id', component: EventDetailsComponent},
      {path: 'event/:id/edit', component: DetailsEditComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
