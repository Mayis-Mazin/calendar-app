import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {events} from './../../services/events';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  
  events: any;
  eventDetails: any = {};
  eventID: number = 0;

  constructor(private route: ActivatedRoute, private navigation: Router) { }

  ngOnInit(): void {
    // get id param from url
    this.eventID = parseInt(this.route.snapshot.paramMap.get('id'));
    // simulate getting data by id
    this.events = (localStorage.getItem('events')) ? JSON.parse(localStorage.getItem('events')) : events;
    this.eventDetails = this.events.filter(e => e.id == this.eventID);
  }

  deleteEvent() {
    let confirmDelete= confirm('Are You Sure?');

    if (confirmDelete) {
      let events = this.events.filter(e => e.id != this.eventID);
      alert('Event deleted successfully');
      localStorage.setItem('events', JSON.stringify(events));
      this.navigation.navigate(['/']);
    }
  }

}
