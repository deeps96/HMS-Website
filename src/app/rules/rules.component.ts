import {MaterializeDirective} from "angular2-materialize";
import { Component, OnInit } from '@angular/core';
import { HMSService } from '../hms.service';
import { Event } from '../hms';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  public startEvents: Event[];
  public stopEvents: Event[];

  constructor(private hmsService: HMSService) { }

  ngOnInit() {
	this.fetchStartEvents();
	this.fetchStopEvents();
  }
  
  private fetchStartEvents(): void{
	  this.hmsService
			.listStartEvents()
			.subscribe(result => {
				this.startEvents = result;
			});
  }
  
  private fetchStopEvents(): void{
	  this.hmsService
			.listStopEvents()
			.subscribe(result => {
				this.stopEvents = result;
			});
  }
  
  public submitStartEvents(): void{
	  this.hmsService.setStartEvents(this.startEvents);
  }
  
  public submitStopEvents(): void{
	  this.hmsService.setStopEvents(this.stopEvents);
  }
}
