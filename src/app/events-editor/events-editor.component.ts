import { MaterializeDirective } from "angular2-materialize";
import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { Event } from '../hms';

declare var Materialize: any;

@Component({
  selector: 'app-events-editor',
  templateUrl: './events-editor.component.html',
  styleUrls: ['./events-editor.component.css']
})
export class EventsEditorComponent implements AfterViewChecked, OnInit {

  public JSON = JSON;

  @Input()
  public events: Event[];
  
  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewChecked() {
	  if (Materialize && Materialize.updateTextFields) {
          Materialize.updateTextFields();
      }
  }
  
  public eventContentChanged(changeEvent: any, evt: Event): void {
	  evt.content = JSON.parse(changeEvent.target.value);
  }
  
  public deleteEvent(evt: Event): void {
	  let index = this.events.indexOf(evt);
	  if (index != -1){
	  	this.events.splice(index, 1);
	  }
  }
  
  public addEvent(): void {
	  this.events.push(new Event());
  }

}
