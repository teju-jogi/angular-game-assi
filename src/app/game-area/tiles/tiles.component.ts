import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  @Input() public cardData;
  @Output() public sendEventToCardHolder = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.sendEventToCardHolder.emit(this.cardData.cardId);
  }

}
