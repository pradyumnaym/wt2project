import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsendComponent } from './chatsend.component';

describe('ChatsendComponent', () => {
  let component: ChatsendComponent;
  let fixture: ComponentFixture<ChatsendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
