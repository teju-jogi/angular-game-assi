import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBLevel3Component } from './type-b-level3.component';

describe('TypeBLevel3Component', () => {
  let component: TypeBLevel3Component;
  let fixture: ComponentFixture<TypeBLevel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeBLevel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeBLevel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
