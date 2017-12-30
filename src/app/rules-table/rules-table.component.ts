import { MaterializeDirective, MaterializeAction } from "angular2-materialize";
import { Component, EventEmitter, OnInit } from '@angular/core';
import { HMSService } from '../hms.service';
import { Rule } from '../hms';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-rules-table',
  templateUrl: './rules-table.component.html',
  styleUrls: ['./rules-table.component.css']
})
export class RulesTableComponent implements OnInit {
  
  private editRule: Rule;
  private deleteRule: Rule;
  public rules: Rule[];
  public modalAction: EventEmitter<string|MaterializeAction>;

  constructor(private hmsService: HMSService) { }

  ngOnInit() {
	  this.modalAction = new EventEmitter<string|MaterializeAction>();
	  this.fetchRules();
  }
  
  private fetchRules(): void {
	  this.hmsService
			.listRules()
			.subscribe(result => {
				this.rules = result;
			});
  }
  
  public executeRule(rule: Rule): void {
	  this.hmsService.executeRule(rule.name);
  }
  
  public updateState(update: any, rule: Rule): void {
	  rule.isActive = update.target.checked;
	  this.hmsService.putRule(rule);
  }
  
  public removeRule(rule: Rule): void {
	  this.hmsService.removeRule(rule.name);
  }

  public closeModal(): void {
      this.modalAction.emit({action: 'modal',params: ['close']});
  }
  
  public openModal(rule: Rule): void {
	  this.deleteRule = rule;
	  Observable.timer(20).subscribe(() => this.modalAction.emit({action: 'modal', params: ['open']}));
  }
  
  public toggleEditMode(rule: Rule): void {
	  if (this.editRule && this.editRule === rule){
		  this.editRule = null;
	  } else {
		  this.editRule = rule;
	  }
  }
  
  public createNewRule(): void {
	  this.toggleEditMode(new Rule());
  }
  
  public ruleEditorClose(): void {
	  this.editRule = null;
  }
  
}
