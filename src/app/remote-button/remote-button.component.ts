import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { RemoteButton } from '../hms';

@Component({
  selector: 'app-remote-button',
  templateUrl: './remote-button.component.html',
  styleUrls: ['./remote-button.component.css']
})
export class RemoteButtonComponent implements OnInit {

  @Input()
  public remoteButton: RemoteButton;
  
  @Output()
  private onClick: EventEmitter<RemoteButton> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  public pressButton(): void {
	  this.onClick.emit(this.remoteButton);
  }

}
