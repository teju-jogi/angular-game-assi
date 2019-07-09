import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeALevel3Component } from './type-a-level3.component';

describe('TypeALevel3Component', () => {
  let component: TypeALevel3Component;
  let fixture: ComponentFixture<TypeALevel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeALevel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeALevel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
