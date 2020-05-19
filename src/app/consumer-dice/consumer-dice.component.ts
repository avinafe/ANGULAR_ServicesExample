import { Component, OnInit } from '@angular/core';
import { DiceService } from '../dice.service';

@Component({
  selector: 'app-consumer-dice',
  template: '<h1>Says: {{throwResult}}</h1>',
  styleUrls: ['./consumer-dice.component.css']
})
export class ConsumerDiceComponent implements OnInit {
  throwResult: number;

  constructor( private diceSrv:DiceService) { }

  ngOnInit(): void {
    this.throwResult = this.diceSrv.throwDice()
  }

}
