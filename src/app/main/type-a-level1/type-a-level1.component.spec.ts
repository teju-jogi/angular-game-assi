import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeALevel1Component } from './type-a-level1.component';

describe('TypeALevel1Component', () => {
  let component: TypeALevel1Component;
  let fixture: ComponentFixture<TypeALevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeALevel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeALevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
