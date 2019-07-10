import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material';
import { MatListModule } from '@angular/material';

import { HomeComponent } from './home/home.component';
import { ScoreDetailesComponent } from './score-detailes/score-detailes.component';
import { TypeALevel1Component } from './type-a-level1/type-a-level1.component';
import { TypeALevel2Component } from './type-a-level2/type-a-level2.component';
import { TypeALevel3Component } from './type-a-level3/type-a-level3.component';
import { TypeBLevel1Component } from './type-b-level1/type-b-level1.component';
import { TypeBLevel2Component } from './type-b-level2/type-b-level2.component';
import { TypeBLevel3Component } from './type-b-level3/type-b-level3.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    ScoreDetailesComponent,
    TypeALevel1Component,
    TypeALevel2Component,
    TypeALevel3Component,
    TypeBLevel1Component,
    TypeBLevel2Component,
    TypeBLevel3Component
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatRadioModule,
    MatListModule
  ],
  exports: [
    HomeComponent,
    ScoreDetailesComponent,
    TypeALevel1Component,
    TypeALevel2Component,
    TypeALevel3Component,
    TypeBLevel1Component,
    TypeBLevel2Component,
    TypeBLevel3Component

  ]
})
export class MainModule { }
