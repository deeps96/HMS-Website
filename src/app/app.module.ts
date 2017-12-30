import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RemoteComponent } from './remote/remote.component';
import { HMSService } from './hms.service';
import { RemoteButtonComponent } from './remote-button/remote-button.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleListEntryComponent } from './module-list-entry/module-list-entry.component';
import { AudioXComponent } from './audio-x/audio-x.component';
import { ExtensionPipePipe } from './extension-pipe.pipe';
import { RulesTableComponent } from './rules-table/rules-table.component';
import { EnumPipePipe } from './enum-pipe.pipe';
import { RuleEditorComponent } from './rule-editor/rule-editor.component';
import { EventsEditorComponent } from './events-editor/events-editor.component';
import { RulesComponent } from './rules/rules.component';
import { UriListenerListComponent } from './uri-listener-list/uri-listener-list.component';
import { PcManagerComponent } from './pc-manager/pc-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    RemoteComponent,
    RemoteButtonComponent,
    ModuleListComponent,
    ModuleListEntryComponent,
    AudioXComponent,
    ExtensionPipePipe,
    RulesTableComponent,
    EnumPipePipe,
    RuleEditorComponent,
    EventsEditorComponent,
    RulesComponent,
    UriListenerListComponent,
    PcManagerComponent,
  ],
  imports: [
    BrowserModule,
	MaterializeModule,
	HttpModule,
	FormsModule
  ],
  providers: [HMSService],
  bootstrap: [AppComponent]
})
export class AppModule { }
