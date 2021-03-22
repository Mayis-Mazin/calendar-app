import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  @Input('frmType') frmType;

  eventForm: FormGroup;

  events: any =  JSON.parse(localStorage.getItem('events'));

  title: string = '';

  eventID: any = '';

  constructor(private fb: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit(): void {
    // create reactive form
    this.eventForm = this.fb.group({
      id: [""],
      title: [""],
      date: [""],
      time: [""],
      class: [""],
      material: [""],
      join: [""],
      details: [""]
    });

    this.title = (this.frmType == 'add') ? 'Add Event' : 'Edit Event';

    if (this.frmType == 'edit') {
      this.eventID = this.router.snapshot.paramMap.get('id');
      this.setData(this.eventID);
    }      
  }

  addNewEvent() {
    let id = parseInt(this.events[this.events.length - 1].id) + 1;
    let event;

    this.eventForm.get('id').setValue(id.toString());
    event = this.eventForm.value;

    this.events.push(event);

    localStorage.setItem('events', JSON.stringify(this.events));

    alert('New event added successfully');

    this.eventForm.reset();
  }

  setData(id) {
    let event = this.events.filter(e => e.id == id);

    this.eventForm.get('id').setValue(event[0]["id"]);
    this.eventForm.get('title').setValue(event[0]["title"]);
    this.eventForm.get('date').setValue(event[0]["date"]);
    this.eventForm.get('time').setValue(event[0]["time"]);
    this.eventForm.get('class').setValue(event[0]["class"]);
    this.eventForm.get('material').setValue(event[0]["material"]);
    this.eventForm.get('join').setValue(event[0]["join"]);
    this.eventForm.get('details').setValue(event[0]["details"]);
  }

  editEvent() {
    let index = this.events.findIndex(i => i.id == this.eventID);
    let event = this.eventForm.value;

    this.events[index] = event;

    localStorage.setItem('events', JSON.stringify(this.events));

    alert('Event edited successfully');
  }

}
