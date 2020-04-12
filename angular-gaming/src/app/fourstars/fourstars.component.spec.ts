import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourstarsComponent } from './fourstars.component';

describe('FourstarsComponent', () => {
  let component: FourstarsComponent;
  let fixture: ComponentFixture<FourstarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourstarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourstarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
