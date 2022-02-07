import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() _player1: Player = {
    id: 1,
    name: '',
    thumb: '',
    score: 0,
  }   
  @Input() _player2: Player = {
    id: 2,
    name: '',
    thumb: '',
    score: 0,
  }   
@Output() addScore = new EventEmitter<number>()
  squares:any;
  next:any;
  winner:any;
  constructor() {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    // Winner não é o this.value
    this.winner = null;
    this.next = true;
    
  }

  get player() {
    // Aqui vai a THUMB
    return this.next ? this._player1.id : this._player2.id;
  }

  move(i: number) {
    if (!this.squares[i]) {
      this.squares.splice(i, 1, this.player);
      this.next = !this.next;
    }

    this.winner = this.calculateWinner();
  }
// Fazer lógica para quando perder
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        this.addScore.emit(this.squares[a])
        return this.squares[a];
      }
    }
    return 0;
  }
}