import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-completion',
  templateUrl: './game-completion.component.html',
  styleUrls: ['./game-completion.component.css']
})
export class GameCompletionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToHome() {
    this.router.navigate(['/home']);
  }

  playAgain() {
    this.router.navigate(['/game']);
  }

}
