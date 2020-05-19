import { Component, OnInit } from '@angular/core';
import { DiceService } from '../dice.service';
import {DameFraseService} from '../dame-frase.service';

@Component({
  selector: 'app-consumer-dime-frase',
  template: `<button (click)="changeFrase()">Muestra una frase del día</button>
              <p>{{message}}</p>`,
  styleUrls: ['./consumer-dime-frase.component.css']
})
export class ConsumerDimeFraseComponent implements OnInit {

  randomNum: any;
  message: string;

  constructor(private diceSrv: DiceService, private dameFraseSrv: DameFraseService) { }

  ngOnInit(): void {
  }

  changeFrase() {
    this.randomNum = this.diceSrv.throwDice();
    this.message = this.dameFraseSrv.dameFrase(this.randomNum);
  }

}
