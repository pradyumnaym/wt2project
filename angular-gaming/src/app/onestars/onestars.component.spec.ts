import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnestarsComponent } from './onestars.component';

describe('OnestarsComponent', () => {
  let component: OnestarsComponent;
  let fixture: ComponentFixture<OnestarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnestarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnestarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
