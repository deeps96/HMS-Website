import { Component, OnInit } from '@angular/core';

import { Device, RemoteButton } from './hms';
import { HMSService } from './hms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public isRuleModuleRunning: boolean;
  public isIRRemoteRunning: boolean;
  public isRadioRemoteRunning: boolean;
  public subwooferRemote: RemoteButton[];
  public lightCeilingRemote: RemoteButton[];
  public desktopRemote: RemoteButton[];
  
  constructor(private hmsService: HMSService) { }
  
  ngOnInit() {
	this.fetchSubwooferRemote();
	this.fetchLightCeilingRemote();
	this.fetchDesktopRemote();
	this.fetchRuleModuleState();
	this.fetchIRRemoteState();
	this.fetchRadioRemoteState();
  }
  
  private fetchIRRemoteState(): void {
	this.hmsService.getRunningModules(Device.PI)
		.subscribe(
			result => {
				for (let module of result) {
					if (module.moduleType === 'IR_REMOTE'){
						this.isIRRemoteRunning = true;
						return;
					}
				}
				this.isIRRemoteRunning = false;
			}
		);
  }
  
  private fetchRadioRemoteState(): void {
	this.hmsService.getRunningModules(Device.PI)
		.subscribe(
			result => {
				for (let module of result) {
					if (module.moduleType === 'RADIO_REMOTE'){
						this.isRadioRemoteRunning = true;
						return;
					}
				}
				this.isRadioRemoteRunning = false;
			}
		);
  }
  
  private fetchRuleModuleState(): void {
	this.hmsService.getRunningModules(Device.PI)
		.subscribe(
			result => {
				for (let module of result) {
					if (module.moduleType === 'RULE'){
						this.isRuleModuleRunning = true;
						return;
					}
				}
				this.isRuleModuleRunning = false;
			}
		);
  }
  
  private fetchSubwooferRemote(): void {
	this.hmsService.getSubwooferRemoteButtons()
		.then(remoteButtons => this.subwooferRemote = remoteButtons);
  }
  
  private fetchLightCeilingRemote(): void {
	this.hmsService.getLightCeilingRemoteButtons()
		.then(remoteButtons => this.lightCeilingRemote = remoteButtons);
  }
  
  private fetchDesktopRemote(): void {
	this.hmsService.getDesktopRemoteButtons()
		.then(remoteButtons => this.desktopRemote = remoteButtons);
  }
  
  public pressIRButton(remoteButton: RemoteButton): void {
	  this.hmsService.pressIRButton(remoteButton);
  }
  
  public pressRadioButton(remoteButton: RemoteButton): void {
	  this.hmsService.pressRadioButton(remoteButton);
  }
}
