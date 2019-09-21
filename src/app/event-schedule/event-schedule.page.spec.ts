import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSchedulePage } from './event-schedule.page';

describe('EventSchedulePage', () => {
  let component: EventSchedulePage;
  let fixture: ComponentFixture<EventSchedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSchedulePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
