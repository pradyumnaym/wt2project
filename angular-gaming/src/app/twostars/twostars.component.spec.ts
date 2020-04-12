import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwostarsComponent } from './twostars.component';

describe('TwostarsComponent', () => {
  let component: TwostarsComponent;
  let fixture: ComponentFixture<TwostarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwostarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwostarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
