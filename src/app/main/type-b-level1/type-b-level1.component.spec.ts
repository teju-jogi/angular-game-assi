import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBLevel1Component } from './type-b-level1.component';

describe('TypeBLevel1Component', () => {
  let component: TypeBLevel1Component;
  let fixture: ComponentFixture<TypeBLevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeBLevel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeBLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
