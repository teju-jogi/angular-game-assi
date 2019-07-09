import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBLevel2Component } from './type-b-level2.component';

describe('TypeBLevel2Component', () => {
  let component: TypeBLevel2Component;
  let fixture: ComponentFixture<TypeBLevel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeBLevel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeBLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
