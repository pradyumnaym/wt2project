import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatcardComponent } from './chatcard.component';

describe('ChatcardComponent', () => {
  let component: ChatcardComponent;
  let fixture: ComponentFixture<ChatcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
