import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreDetailesComponent } from './score-detailes.component';

describe('ScoreDetailesComponent', () => {
  let component: ScoreDetailesComponent;
  let fixture: ComponentFixture<ScoreDetailesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreDetailesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
