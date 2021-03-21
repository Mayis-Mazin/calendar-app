import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {events} from './../../services/events';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  
  events: any = events;
  eventDetails: any = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get id param from url
    const eventID = this.route.snapshot.paramMap.get('id');
    // simulate getting data by id
    this.eventDetails = this.events.filter(e => e.id == eventID);
  }

}
