import { Component, OnInit } from '@angular/core';
import { HMSService } from '../hms.service';

@Component({
  selector: 'app-audio-x',
  templateUrl: './audio-x.component.html',
  styleUrls: ['./audio-x.component.css']
})
export class AudioXComponent implements OnInit {

  public audioCoreParameters: String[];
  public visualizationParameters: String[];

  constructor(private hmsService: HMSService) { }

  ngOnInit() {
	  this.fetchAudioCoreParameters();
	  this.fetchVisualizationParameters();
  }
  
  private fetchVisualizationParameters(): void {
	  this.hmsService
			.listVisualizationParameters()
			.subscribe(result => this.visualizationParameters = result);
  }
  
  private fetchAudioCoreParameters(): void {
	  this.hmsService
			.listAudioCoreParameters()
			.subscribe(result => this.audioCoreParameters = result);
  }
  
  public audioCoreParameterChanged(selected: any): void {
	  this.hmsService.loadAudioCoreParameter(this.audioCoreParameters[selected.target.options.selectedIndex - 1]);
  }
  
  public visualizationParameterChanged(selected: any): void {
	  this.hmsService.loadVisualizationParameter(this.visualizationParameters[selected.target.options.selectedIndex - 1]);
  }
  
  public start(): void {
	  this.hmsService.changeAudioOutput('Line 1');
	  this.hmsService.startVisualization();
  }
  
  public stop(): void {
	  this.hmsService.stopVisualization();
	  this.hmsService.changeAudioOutput('Realtek Digital Output(Optical)');
  }

}
