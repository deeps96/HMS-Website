import { Component, OnInit } from '@angular/core';
import { HMSService } from '../hms.service';
import { Device, ModuleListEntry, ModuleInfo, ModuleState } from '../hms';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  public isRefreshing: Boolean = false;
  public moduleEntries: ModuleListEntry[];
  public Device = Device;
  public ModuleState = ModuleState;

  constructor(private hmsService: HMSService) {}

  ngOnInit() {
	this.fetchAllModules();
  }
  
  private fetchAllModules(): void {
    this.moduleEntries = [];
	this.fetchRunningModules();
	this.fetchStandbyModules();
	Observable.timer(5000).subscribe(() => this.fetchAvailableModules());
  }
  
  private fetchRunningModules(): void {
	for (let deviceString in Device) {
		if (!isNaN(Number(deviceString))) {
			continue
		}
		let deviceKey = deviceString as keyof typeof Device;
		let device = Device[deviceKey];
		this.hmsService
			.getRunningModules(device)
			.subscribe(
				result => {
					for (let module of result) {
						let entry = {
							moduleInfo: module,
							moduleState: ModuleState.RUNNING,
							device: device
						}
						this.moduleEntries.push(entry);
					}
				}
			);
	}
  }
  
  private fetchStandbyModules(): void {
	for (let deviceString in Device) {
		if (!isNaN(Number(deviceString))) {
			continue
		}
		let deviceKey = deviceString as keyof typeof Device;
		let device = Device[deviceKey];
		this.hmsService
			.getStandbyModules(device)
			.subscribe(
				result => {
					for (let module of result) {
						let entry = {
							moduleInfo: module,
							moduleState: ModuleState.STANDBY,
							device: device
						}
						this.moduleEntries.push(entry);
					}
				}
			);
	}  
  }

  private fetchAvailableModules(): void {
	for (let deviceString in Device) {
		if (!isNaN(Number(deviceString))) {
			continue
		}
		let deviceKey = deviceString as keyof typeof Device;
		let device = Device[deviceKey];
		this.hmsService
			.getAvailableModules(device)
			.subscribe(
				result => {
					let filteredModules: String[] = [];
					for (let moduleName of result) {
						if ((!this.moduleEntries || this.moduleEntries.filter(module => 
								(((module.moduleInfo && module.moduleInfo.moduleType === moduleName) || 
								(module.moduleID === moduleName)) && module.device === device)).length == 0)){
							let entry = {
								moduleID: moduleName,
								moduleState: ModuleState.SHUTDOWN,
								device: device
							}
							this.moduleEntries.push(entry);
						}
					}
					this.isRefreshing = false;
				}
			);
	}    
  }
  
  private shutdownModule(entry: ModuleListEntry): void {
	  this.hmsService.shutdownModule(entry.device, entry.moduleInfo.moduleType);
	  this.quickRefresh();
  }
  
  private launchModule(entry: ModuleListEntry): void {
	  this.hmsService.launchModule(entry.device, entry.moduleID);
	  this.longRefresh();
  }
  
  public triggerModuleState(entry: ModuleListEntry): void {
	  switch (+entry.moduleState) {
			case ModuleState.RUNNING:
			case ModuleState.STANDBY:
				this.shutdownModule(entry)
			case ModuleState.SHUTDOWN:
				this.launchModule(entry);
			default:
		}
  }
  
  private quickRefresh(): void {
	  this.refresh(300);
  }
  
  public longRefresh(): void {
	  this.refresh(3000);
  }
  
  private refresh(time: number): void {
	  this.isRefreshing = true;
	  Observable.timer(time).subscribe(() => this.fetchAllModules());
  }
}
