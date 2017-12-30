import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RemoteButton } from '../hms';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  @Input()
  public remoteButtons: RemoteButton[];

  @Output()
  private onClick: EventEmitter<RemoteButton> = new EventEmitter();
  
  public Math: any;
  
  constructor() {
	  this.Math = Math;
  }

  ngOnInit() {
	
  }
  
  public buttonPressed(remoteButton: RemoteButton): void {
	  this.onClick.emit(remoteButton);
  }

}
