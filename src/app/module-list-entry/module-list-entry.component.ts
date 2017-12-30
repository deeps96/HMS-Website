import { Component, Input, OnInit } from '@angular/core';
import { HMSService } from '../hms.service';
import { HttpConfig, ModuleInfo, SupportedCommand } from '../hms';

@Component({
  selector: 'app-module-list-entry',
  templateUrl: './module-list-entry.component.html',
  styleUrls: ['./module-list-entry.component.css']
})
export class ModuleListEntryComponent implements OnInit {

  @Input()
  public module: ModuleInfo;

  constructor(private hmsService: HMSService) { }

  ngOnInit() {
  }

}
