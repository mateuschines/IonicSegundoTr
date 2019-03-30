import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatePage } from './mate.page';

describe('MatePage', () => {
  let component: MatePage;
  let fixture: ComponentFixture<MatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
