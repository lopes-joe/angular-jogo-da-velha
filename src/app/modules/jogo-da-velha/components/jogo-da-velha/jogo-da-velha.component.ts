import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from '../../shared/jogo-da-velha.service';


@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {
  
  constructor(private jogoDaVelhaService: JogoDaVelhaService ) { }

  ngOnInit(): void {
    this.jogoDaVelhaService.initialize();
  }

  get showStart(): boolean {
    return this.jogoDaVelhaService.showStart;
  }

  get showTable(): boolean {
    return this.jogoDaVelhaService.showTable;
  }

  get showEnd(): boolean {
    return this.jogoDaVelhaService.showEnd;
  }

  startGame():void {
    this.jogoDaVelhaService.startGame();
  }

}
