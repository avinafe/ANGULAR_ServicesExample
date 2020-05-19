import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LicencePlateAuthorizationService {
  
  isOddAllowed: boolean = true;
  isEvenAllowed: boolean = false;
  isAuthorized: boolean;

  authorized(numberPlate: number): Promise<string> {
    if(numberPlate % 2 == 0){
      this.isAuthorized = this.isEvenAllowed
    } else {
      this.isAuthorized = this.isOddAllowed
    }

    if (this.isAuthorized) {
      console.log("Allowed to drive in the city center"); 
      return Promise.resolve("Allowed to drive in the city center")
    } else {
      console.log("NOT allowed to drive in the city center")
      return Promise.resolve("NOT allowed to drive in the city center")
    }
  }
}
