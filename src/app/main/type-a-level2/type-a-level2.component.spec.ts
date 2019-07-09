import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeALevel2Component } from './type-a-level2.component';

describe('TypeALevel2Component', () => {
  let component: TypeALevel2Component;
  let fixture: ComponentFixture<TypeALevel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeALevel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeALevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
