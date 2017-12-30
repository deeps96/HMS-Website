import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioXComponent } from './audio-x.component';

describe('AudioXComponent', () => {
  let component: AudioXComponent;
  let fixture: ComponentFixture<AudioXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
