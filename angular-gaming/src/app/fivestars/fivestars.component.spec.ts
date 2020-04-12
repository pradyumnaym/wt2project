import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivestarsComponent } from './fivestars.component';

describe('FivestarsComponent', () => {
  let component: FivestarsComponent;
  let fixture: ComponentFixture<FivestarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivestarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivestarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
