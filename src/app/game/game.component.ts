import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service'
import { Player } from '../models/player';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  playersSelected: boolean = false
  showAbout: boolean = false
  gameStarted: boolean = false
  thumb404 = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
  defaultImage = '/assets/celero_marvel.png'
  player1: Player = {
    id: 1,
    name: '',
    thumb: '',
    score: 0,
  }
  player2: Player = {
    id: 2,
    name: '',
    thumb: '',
    score: 0,
  }

  constructor(
    public player: PlayerService,
  ) {
  }
  ngOnInit(): void {

  }

  checkThumb(thumb: string){
    if(thumb.match(this.thumb404) || !thumb){
      return this.defaultImage
    } else return thumb
  }

  getPlayer1(event: string) {
    this.player1.name = event
    this.player.getAllCharacters(this.player1.name).subscribe(data => {
      data.map((e: any) => {
        this.player1.name = e.name
        this.player1.thumb = this.checkThumb(e.thumbnail.path + '.' + e.thumbnail.extension)
      })
    })
  }
  getPlayer2(event: string) {
    this.player2.name = event
    this.player.getAllCharacters(this.player2.name).subscribe(data => {
      data.map((e: any) => {
        this.player2.name = e.name
        this.player2.thumb = this.checkThumb(e.thumbnail.path + '.' + e.thumbnail.extension)
      })
    })
  }

  checkField(){
    if(this.player1.name && this.player2.name) {
        this.gameStarted = true
       return this.playersSelected = true
    } else {
      alert('Obrigatório escrever o nome dos dois jogadores!')
      return this.playersSelected = false
    }
  }
  aboutGame() {
    this.showAbout = true
  }
  addScore(winner: number){
    if(winner === 1){
       return this.player1.score += 1
    } else if (winner === 2){
      return this.player2.score += 1
    } else return
  }


}