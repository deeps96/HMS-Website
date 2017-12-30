import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcManagerComponent } from './pc-manager.component';

describe('PcManagerComponent', () => {
  let component: PcManagerComponent;
  let fixture: ComponentFixture<PcManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
