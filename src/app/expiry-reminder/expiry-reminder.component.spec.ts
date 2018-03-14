import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiryReminderComponent } from './expiry-reminder.component';

describe('ExpiryReminderComponent', () => {
  let component: ExpiryReminderComponent;
  let fixture: ComponentFixture<ExpiryReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiryReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiryReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
