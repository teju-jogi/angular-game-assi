import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoringService } from 'src/app/scoring.service';


@Component({
  selector: 'app-game-completion',
  templateUrl: './game-completion.component.html',
  styleUrls: ['./game-completion.component.css']
})
export class GameCompletionComponent implements OnInit {

  public playerName: string;
  public playerScore: number;
  constructor(private router: Router, private scoringService: ScoringService) { }

  ngOnInit() {
    this.scoringService.playerName.subscribe(data => this.playerName = data );
    this.scoringService.playerScore.subscribe(data => this.playerScore = data );
  }
  goToHome() {
    this.router.navigate(['/home']);
    this.scoringService.playerName.next('');
    this.scoringService.playerScore.next(0);
  }

  playAgain() {
    this.router.navigate(['/game']);
    this.scoringService.playerName.next(this.playerName);
    this.scoringService.playerScore.next(0);

  }

}
