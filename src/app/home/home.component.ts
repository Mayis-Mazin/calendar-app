import { Component, forwardRef, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import {events} from './../../services/events';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  calendarOptions: CalendarOptions;
  eventsModel: any;  
  @ViewChild('fullcalendar') fullcalendar: FullCalendarComponent;

  // events
  events = events;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // need for load calendar bundle first
    forwardRef(() => Calendar);

    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      editable: true,
      customButtons: {
        myCustomButton: {
          text: 'custom!',
          click: function () {
            alert('clicked the custom button!');
          }
        }
      },
      headerToolbar: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'dayGridMonth'
      },
      dateClick: this.handleDateClick.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventDragStop: this.handleEventDragStop.bind(this),
    };

    // simulate event data
    this.calendarOptions.events = (localStorage.getItem('events')) ? JSON.parse(localStorage.getItem('events')) : this.events;

    localStorage.setItem('events', JSON.stringify(this.calendarOptions.events));
  }

  //#region 

  // calender handler

  handleDateClick(arg) {
    console.log(arg);
  }

  handleEventClick(arg) {
    // get event id
    const eventId = arg.event._def.publicId;
    // navigate event details component
    this.router.navigate([`/event/${eventId}`]);
  }

  handleEventDragStop(arg) {
    console.log(arg);
  }

  updateHeader() {
    this.calendarOptions.headerToolbar = {
      left: 'prev,next myCustomButton',
      center: 'title',
      right: ''
    };
  }

  updateEvents() {
    const nowDate = new Date();
    const yearMonth = nowDate.getUTCFullYear() + '-' + (nowDate.getUTCMonth() + 1);

    this.calendarOptions.events = [{
      title: 'Updaten Event',
      start: yearMonth + '-08',
      end: yearMonth + '-10'
    }];
  }

  //#endregion

}
