import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreestarsComponent } from './threestars.component';

describe('ThreestarsComponent', () => {
  let component: ThreestarsComponent;
  let fixture: ComponentFixture<ThreestarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreestarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreestarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
