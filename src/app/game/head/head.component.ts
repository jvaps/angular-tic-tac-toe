import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from 'src/app/models/player';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})


export class HeadComponent {
  player1: string = ''
  player2: string = ''
    constructor() {}
    @Output() sendPlayer1 = new EventEmitter<string>()
    @Output() sendPlayer2 = new EventEmitter<string>()
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

    setPlayer1(player1: string) {
      this.player1 = player1
      this.sendPlayer1.emit(this.player1)
      // console.log('setPlayer1',this.player1)
    }    
    setPlayer2(player2: string) {
      this.player2 = player2
      this.sendPlayer2.emit(this.player2)
      // console.log('setPlayer2',this.player2)
    }
} 
