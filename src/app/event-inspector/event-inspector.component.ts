import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
@Component({
  selector: 'app-event-inspector',
  templateUrl: './event-inspector.component.html',
  styleUrls: ['./event-inspector.component.css']
})
export class EventInspectorComponent implements OnInit {
  eventMessage: string = '';
    constructor(private eventservice: EventsService) {
        this.eventservice.eventMessage().subscribe((data) => {
            this.eventMessage = data;
        });
    }
  ngOnInit(): void {
  }


}
