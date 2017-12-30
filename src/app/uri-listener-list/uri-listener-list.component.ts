import { Component, OnInit } from '@angular/core';
import { HMSService } from '../hms.service';

@Component({
  selector: 'app-uri-listener-list',
  templateUrl: './uri-listener-list.component.html',
  styleUrls: ['./uri-listener-list.component.css']
})
export class UriListenerListComponent implements OnInit {

  public uri: String;

  constructor(private hmsService: HMSService) { }

  ngOnInit() {
	  this.uri = '';
  }
  
  public deleteListener(uri: String): void{
	  this.hmsService.unregisterUriListener(uri);
  }
  
  public addListener(uri: String): void{
	  this.hmsService.registerUriListener(uri);
  }

}
