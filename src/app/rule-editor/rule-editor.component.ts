import { MaterializeDirective } from "angular2-materialize";
import { AfterViewChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HMSService } from '../hms.service';
import { Comparator, Rule, SupportedDataType } from '../hms';

declare var Materialize: any;

@Component({
  selector: 'app-rule-editor',
  templateUrl: './rule-editor.component.html',
  styleUrls: ['./rule-editor.component.css']
})
export class RuleEditorComponent implements AfterViewChecked, OnInit {

  public Comparator = Comparator;
  public SupportedDataType = SupportedDataType;

  @Input()
  editRule: Rule;
  
  @Output()
  ruleStatus: EventEmitter<string> = new EventEmitter();

  constructor(private hmsService: HMSService) { }

  ngOnInit() {
  }
  
  ngAfterViewChecked() {
	  if (Materialize && Materialize.updateTextFields) {
          Materialize.updateTextFields();
      }
  }

  public putRule(rule: Rule): void {
	  this.hmsService.putRule(rule);
  }
  
  public completed(): void {
	  this.ruleStatus.emit('completed');
  }

}