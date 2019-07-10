import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public Tiles: any[];
  hardness: number;
  score: number;
  misses: number;
  public isGameActive = false;
  public selectedCard = {};
  hasChance: boolean;
  cardClickTimer: any;
  public cardClickTimeInterval = 1000;
  public gameType = 2;
  gameTimer: any;
  public gameTimeLimit =  12000;
  public isGameOver: boolean;
  public noOfLife: number;
  constructor( private router: Router) { }

  ngOnInit() {
    this.Tiles = [];
    this.hardness = 4;
    this.score = 0;
    this.misses = 0;
    this.noOfLife = 3;
    this.isGameOver = false;
    this.generateTiles();
    if (this.gameType === 1) {
      this.gameTimer = setTimeout(() => {
      }, this.gameTimeLimit);
    }
    this.cardClickTimer = setInterval(() => {
      this.pickCard();
    }, this.cardClickTimeInterval);
    this.isGameActive = true;
  }

  generateTiles() {
    for (let cardIndex = 1; cardIndex <= this.hardness; cardIndex++) {
      this.Tiles.push({
        cardId: cardIndex,
        isActive: false
      });
    }
  }

  cardClicked(cardId: number) {
    if (this.isGameActive) {
// tslint:disable-next-line: no-string-literal
      if ((this.selectedCard['cardId'] === cardId) && (this.hasChance === true)) {
        this.score++;
        this.hasChance = false;
        clearInterval(this.cardClickTimer);
        this.pickCard();
        this.cardClickTimer = setInterval(() => {
          this.pickCard();
        }, this.cardClickTimeInterval);
      } else {
        this.misses++;
        this.noOfLife--;
        if (this.misses === 3 || this.noOfLife === 0) {
          this.isGameOver = true;
          this.endGame();
        }
      }
    }
  }

  pickCard() {
    this.selectedCard['isActive'] = false;
    let card = this.Tiles[this.pickRandomCardId()];
    while (card === this.selectedCard) {
      card = this.Tiles[this.pickRandomCardId()];
    }
    this.selectedCard = card;
    this.selectedCard['isActive'] = true;
    this.hasChance = true;
  }

  public pickRandomCardId(): number {
    return Math.floor(Math.random() * this.Tiles.length);
  }
  endGame() {
    clearInterval(this.cardClickTimer);
    this.router.navigate(['/game-completion']);
  }
}
