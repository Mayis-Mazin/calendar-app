import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { HomeComponent } from './home/home.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';

// reusable
import { EventFormComponent } from './reusable/event-form/event-form.component';

// calender
import { FullCalendarModule } from '@fullcalendar/angular';
import { DetailsEditComponent } from './event-details/details-edit/details-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponent,
    HomeComponent,
    DetailsEditComponent,
    AddEventComponent,
    EditEventComponent,
    EventFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'event/edit/:id', component: EditEventComponent},      
      {path: 'event/add', component: AddEventComponent},
      {path: 'event/:id', component: EventDetailsComponent},
      //{path: 'event/:id/edit', component: DetailsEditComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
