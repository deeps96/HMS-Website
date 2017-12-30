import { Injectable } from '@angular/core';
import { MaterializeDirective, MaterializeAction } from 'angular2-materialize';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Config, Device, Event, HttpConfig, ModuleInfo, RemoteButton, Rule, SupportedCommand } from '../app/hms';

import 'rxjs/add/operator/map';

declare var Materialize:any;

import { SUBWOOFER_REMOTE, LIGHT_CEILING_REMOTE, DESKTOP_REMOTE } from '../assets/remotes';
import { CONFIG } from '../assets/config';

@Injectable()
export class HMSService {
	
	constructor(private http: Http) { }
	
	// ===== IRREMOTE =====
	public pressIRButton(remoteButton: RemoteButton) {
		const body = {
			remoteName: remoteButton.remoteName, 
			buttonName: remoteButton.buttonName
		};
		this.http.post('http://' + this.mapDeviceToIP(Device.PI) + ':9171/pressButton', JSON.stringify(body))
			.subscribe();
	}
	// ##### LIGHT_CEILING #####
	public getLightCeilingRemoteButtons(): Promise<RemoteButton[]> {
		return Promise.resolve(LIGHT_CEILING_REMOTE);
	}
	// ##### SUBWOOFER #####
	public getSubwooferRemoteButtons(): Promise<RemoteButton[]> {
		return Promise.resolve(SUBWOOFER_REMOTE);
	}
	
	// ===== RADIO_REMOTE =====
	public pressRadioButton(remoteButton: RemoteButton) {
		const body = {
			remoteName: remoteButton.remoteName, 
			buttonName: remoteButton.buttonName
		};
		this.http.post('http://' + this.mapDeviceToIP(Device.PI) + ':1814/pressButton', JSON.stringify(body))
			.subscribe();
	}
	// ##### DESKTOP #####
	public getDesktopRemoteButtons(): Promise<RemoteButton[]> {
		return Promise.resolve(DESKTOP_REMOTE);
	}
	
	// ===== NetworkServer =====
	public getRunningModules(device: Device): Observable<ModuleInfo[]> {
		return this.http.post('http://' + this.mapDeviceToIP(device) + ':1451/listRunningModules', '')
			.map(this.extractData)
			.catch(this.handleError);
	} 
	
	public getStandbyModules(device: Device): Observable<ModuleInfo[]> {
		return this.http.post('http://' + this.mapDeviceToIP(device) + ':1451/listStandbyModules', '')
			.map(this.extractData)
			.catch(this.handleError);
	}
	
	// ===== Launcher =====
	public getAvailableModules(device: Device): Observable<String[]> {
		return this.http.post('http://' + this.mapDeviceToIP(device) + ':1212/listModules', '')
			.map(this.extractData)
			.catch(this.handleError);
	}
	
	public launchModule(device: Device, module: String): void {
		const body = {
			moduleID: module
		};
		this.http.post('http://' + this.mapDeviceToIP(device) + ':1212/launchModule', JSON.stringify(body))
			.subscribe();
	}
	
	public shutdownModule(device: Device, module: String): void {
		const body = {
			moduleID: module
		};
		this.http.post('http://' + this.mapDeviceToIP(device) + ':1212/shutdownModule', JSON.stringify(body))
			.subscribe();
	}
	
	// ===== AudioX =====
	public listAudioCoreParameters(): Observable<String[]> {
		return this.http.post('http://' + this.mapDeviceToIP(Device.PC) + ':1219/listAudioCoreParameters', '')
			.map(this.extractData)
			.catch(this.handleError);
	}
	
	public listVisualizationParameters(): Observable<String[]> {
		return this.http.post('http://' + this.mapDeviceToIP(Device.PC) + ':1219/listVisualizationParameters', '')
			.map(this.extractData)
			.catch(this.handleError);
	}

	public loadAudioCoreParameter(parameter: String): void {
		const body = {
			fileName: parameter
		};
		this.http.post('http://' + this.mapDeviceToIP(Device.PC) + ':1219/loadAudioCoreParameter', JSON.stringify(body))
			.subscribe();
	}
	
	public loadVisualizationParameter(parameter: String): void {
		const body = {
			fileName: parameter
		};
		this.http.post('http://' + this.mapDeviceToIP(Device.PC) + ':1219/loadVisualizationParameter', JSON.stringify(body))
			.subscribe();
	}
	
	public startVisualization(): void {
		this.http.post('http://' + this.mapDeviceToIP(Device.PC) + ':1219/startVisualizer', '')
			.subscribe();
	}
	
	public stopVisualization(): void {
		this.http.post('http://' + this.mapDeviceToIP(Device.PC) + ':1219/stopVisualizer', '')
			.subscribe();
	}
	
	// ===== Rules =====
	
	public listRules(): Observable<Rule[]> {
		return this.http.post('http://' + this.mapDeviceToIP(Device.PI) + ':1821/listRules', '')
			.map(this.extractData)
			.catch(this.handleError);
	}
	
	public putRule(rule: Rule): void {
		const body = {
			rule: rule
		};
		this.http.post('http://' + this.mapDeviceToIP(Device.PI) + ':1821/addRule', JSON.stringify(body))
			.subscribe();
	}
	
	public removeRule(ruleName: String): void {
		const body = {
			name: ruleName
		};
		this.http.post('http://' + this.mapDeviceToIP(Device.PI) + ':1821/removeRule', JSON.stringify(body))
			.subscribe();
	}
	
	public executeRule(ruleName: String): void {
		const body = {
			name: ruleName
		};
		this.http.post('http://' + this.mapDeviceToIP(Device.PI) + ':1821/executeRule', JSON.stringify(body))
			.subscribe();
	}
	
	public listStartEvents(): Observable<Event[]> {
		return this.http.post('http://' + this.mapDeviceToIP(Device.PI) + ':1821/listStartEvents', '')
			.map(this.extractEvents)
			.catch(this.handleError);
	}
	
	public listStopEvents(): Observable<Event[]> {
		return this.http.post('http://' + this.mapDeviceToIP(Device.PI) + ':1821/listStopEvents', '')
			.map(this.extractEvents)
			.catch(this.handleError);
	}
	
	public setStartEvents(events: Event[]): void {
		const actionEvents = {
			events: events
		};
		const body = {
			events: actionEvents
		};
		console.log(JSON.stringify(body));
		this.http.post('http://' + this.mapDeviceToIP(Device.PI) + ':1821/setStartEvents', JSON.stringify(body))
			.subscribe();
	}
	
	public setStopEvents(events: Event[]): void {
		const actionEvents = {
			events: events
		};
		const body = {
			events: actionEvents
		};
		this.http.post('http://' + this.mapDeviceToIP(Device.PI) + ':1821/setStopEvents', JSON.stringify(body))
			.subscribe();
	}
	
	public registerUriListener(uri: String): void {
		const body = {
			commandUri: uri
		};
		this.http.post('http://' + this.mapDeviceToIP(Device.PI) + ':1821/registerListener', JSON.stringify(body))
			.subscribe();
	}
	
	public unregisterUriListener(uri: String): void {
		const body = {
			commandUri: uri
		};
		this.http.post('http://' + this.mapDeviceToIP(Device.PI) + ':1821/unregisterListener', JSON.stringify(body))
			.subscribe();
	}
	
	// ===== PC Manager =====
	public changeAudioOutput(audioOutputDevice: String): void {
		const body = {
			outputDevice: audioOutputDevice
		};
		this.http.post('http://' + this.mapDeviceToIP(Device.PC) + ':1631/changeOutputDevice', JSON.stringify(body))
			.subscribe();
	}
	
	public listPrograms(): Observable<String[]> {
		return this.http.post('http://' + this.mapDeviceToIP(Device.PC) + ':1631/listPrograms', '')
			.map(this.extractData)
			.catch(this.handleError);
	}
	
	public startProgram(program: String): void {
		const body = {
			programName: program
		};
		this.http.post('http://' + this.mapDeviceToIP(Device.PC) + ':1631/startProgram', JSON.stringify(body))
			.subscribe();
	}
	
	public shutdownDevice(device: Device): void {
		this.http.post('http://' + this.mapDeviceToIP(device) + ':1631/shutdown', '')
			.subscribe();
	}
	
	public setVolume(device: Device, level: Number, audioDevice: String): void {
		const body = {
			device: audioDevice,
			volume: level
		};
		this.http.post('http://' + this.mapDeviceToIP(device) + ':1631/setVolume', JSON.stringify(body))
			.subscribe();
	}
	
	// ===== WOL =====
	public wakeupPC(): void {
		const body = {
			targetMAC: this.mapDeviceToMac(Device.PC),
			targetAddress: this.mapDeviceToIP(Device.PC)
		};
		this.http.post('http://' + this.mapDeviceToIP(Device.PI) + ':2316/sendWOL', JSON.stringify(body))
			.subscribe();
	}
	
	
	// ===== HELPER =====
	private extractEvents(res: Response) {
		let body = res.json();
        return body.events || {};
	}
	private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
	
	private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
		Materialize.toast(errMsg, 3000, "");
        return [];
    }
	
	private mapDeviceToIP(device: Device): String {
		switch (+device) {
			case Device.PI:
				return CONFIG.piIP;
			case Device.PC:
				return CONFIG.pcIP;
			default:
				return null;
		}
	}
	
	private mapDeviceToMac(device: Device): String {
		switch (+device) {
			case Device.PC:
				return CONFIG.pcMac;
			default:
				return null;
		}
	}

}