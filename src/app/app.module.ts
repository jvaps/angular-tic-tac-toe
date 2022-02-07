import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './game/board/board.component';
import { HeadComponent } from './game/head/head.component';
import { HttpClientModule } from '@angular/common/http';
import { SquareComponent } from './game/board/square/square.component';
@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BoardComponent,
    HeadComponent,
    SquareComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
