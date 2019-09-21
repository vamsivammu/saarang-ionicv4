import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProshowsPage } from './proshows.page';

describe('ProshowsPage', () => {
  let component: ProshowsPage;
  let fixture: ComponentFixture<ProshowsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProshowsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProshowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
