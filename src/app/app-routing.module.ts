import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { GameComponent } from './game-area/game/game.component';
import { GameCompletionComponent } from './game-area/game-completion/game-completion.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'game-completion', component: GameCompletionComponent},
  { path: '**', pathMatch: 'prefix', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
