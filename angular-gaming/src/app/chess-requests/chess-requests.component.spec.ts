import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessRequestsComponent } from './chess-requests.component';

describe('ChessRequestsComponent', () => {
  let component: ChessRequestsComponent;
  let fixture: ComponentFixture<ChessRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
