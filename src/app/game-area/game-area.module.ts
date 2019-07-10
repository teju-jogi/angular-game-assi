import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { GameCompletionComponent } from './game-completion/game-completion.component';
import { TilesComponent } from './tiles/tiles.component';
import { PlayerScoreComponent } from './player-score/player-score.component';
import { TimerComponent } from './timer/timer.component';
import { LifeComponent } from './life/life.component';
import { MatGridListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  GameComponent,
  GameCompletionComponent,
  TilesComponent,
  PlayerScoreComponent,
  TimerComponent,
  LifeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatGridListModule
  ],
  exports: [
    GameComponent,
    GameCompletionComponent,
    TilesComponent,
    PlayerScoreComponent,
    TimerComponent,
    LifeComponent

  ]
})
export class GameModule { }
