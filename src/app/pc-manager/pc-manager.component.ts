import { Component, OnInit } from '@angular/core';
import { HMSService } from '../hms.service';
import { Device } from '../hms';


@Component({
  selector: 'app-pc-manager',
  templateUrl: './pc-manager.component.html',
  styleUrls: ['./pc-manager.component.css']
})
export class PcManagerComponent implements OnInit {

  public shouldBeOn: boolean;
  public programs: String[];
  private currentProgram: String;

  constructor(private hmsService: HMSService) { }

  ngOnInit() {
	  this.fetchPrograms();
	  this.fetchPCState();
  }

  private fetchPCState(): void {
	this.hmsService.getRunningModules(Device.PC)
		.subscribe(
			result => {
				for (let module of result) {
					if (module.moduleType === 'PC_MANAGER'){
						this.shouldBeOn = true;
						return;
					}
				}
				this.shouldBeOn = false;
			}
		);
  }
  
  private fetchPrograms(): void {
	  this.hmsService
			.listPrograms()
			.subscribe(result => this.programs = result);
  }
  
  public programChanged(selected: any): void {
	  this.currentProgram = this.programs[selected.target.options.selectedIndex - 1];
  }
  
  public startCurrentProgram(): void {
	  this.hmsService.startProgram(this.currentProgram);
  }
  
  public updatePCState(): void {
	  if (this.shouldBeOn) {
		this.hmsService.wakeupPC();
	  } else {
		this.hmsService.shutdownDevice(Device.PC);
	  }
  }
  
  public changeVolume(level: Number): void {
	  this.hmsService.setVolume(Device.PC, level, 'Realtek High Definition Audio\\Device\\Realtek Digital Output(Optical)');
  }
}
