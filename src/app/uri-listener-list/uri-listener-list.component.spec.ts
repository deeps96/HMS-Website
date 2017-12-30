import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UriListenerListComponent } from './uri-listener-list.component';

describe('UriListenerListComponent', () => {
  let component: UriListenerListComponent;
  let fixture: ComponentFixture<UriListenerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UriListenerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UriListenerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
