export class RemoteButton {
    imageUrl: String;
    description: String;
	remoteName: String;
	buttonName: String;
}

export class ModuleInfo {
	httpConfig: HttpConfig;
	moduleType: String;
	networkConfig: any;
}

export class HttpConfig {
	httpServerPort: Number;
	supportedCommands: SupportedCommand[];
}

export class SupportedCommand {
	commandUri: String;
	parameterJson: String;
	parameterClassName: String;
}

export enum Device {
	PI, PC
};

export class Config {
	piIP: String;
	pcIP: String;
	pcMac: String;
}

export enum ModuleState {
	SHUTDOWN, STANDBY, RUNNING
}

export interface ModuleListEntry {
	moduleInfo?: ModuleInfo;
	moduleID?: String;
	moduleState: ModuleState;
	device: Device;
}

export class Rule {
	condition: Condition;
	events: Event[];
	timeout: Number;
	name: String;
	isActive: Boolean;
	
	constructor() {
		this.condition = new Condition;
		this.events = [];
	}
}

export class Event {
	targetUrl: String;
	content: any;
}

export class Condition {
	jsonAttributePath: String;
	expectedValue: String;
	inputClassType: String;
	attributeDataType: SupportedDataType;
	comparator: Comparator;
	commandURI: String;
}

export enum SupportedDataType {
	STRING, INTEGER, BOOLEAN
}

export enum Comparator {
	EQUALS, GREATER
}