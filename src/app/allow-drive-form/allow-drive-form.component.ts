import { Component, OnInit } from '@angular/core';
import { LicencePlateAuthorizationService } from '../licence-plate-authorization-service';
import { read } from 'fs';

@Component({
  selector: 'app-allow-drive-form',
  templateUrl: './allow-drive-form.component.html',
  styleUrls: ['./allow-drive-form.component.css']
})
export class AllowDriveFormComponent implements OnInit {

  response: string;
  plateNumber: number;
  
  constructor(private licenceSrv: LicencePlateAuthorizationService) { }

  ngOnInit(): void {   
  }

  VerifyAllowedDrive() {
    console.log('Plate: ', this.plateNumber);
    this.licenceSrv.authorized(this.plateNumber).then(resp => this.response = resp);
  }

}
