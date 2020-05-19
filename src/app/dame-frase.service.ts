import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DameFraseService {

  constructor() {
    
  }
  dameFrase(number) {
    switch (number) {
      case 1:
        return 'A quién madruga Dios le ayuda'
      case 2:
        return 'A Dios rogando y con el mazo dando'
      case 3:
        return 'No hay mal que por bien no venga'
      case 4:
        return 'No hay dos sin tres'
      case 5:
        return 'Más vale prevenir que curar'
      case 6:
        return 'Más pájaro en mano que ciento volando'
      default:
        break;
    }
  }

  getPhrase(number) {
    switch (number) {
      case 1:
        return 'Who gets up early God helps'
      case 2:
        return 'To God praying and with the gavel giving'
      case 3:
        return 'There is no evil that does not come for good'
      case 4:
        return 'There are no two without three'
      case 5:
        return 'Prevention is better than cure'
      case 6:
        return 'More bird in hand than a hundred flying'
      default:
        break;
    }
  }
}
