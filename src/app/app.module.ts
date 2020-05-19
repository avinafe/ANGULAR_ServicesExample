import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConsumerDiceComponent } from './consumer-dice/consumer-dice.component';
import { ConsumerDimeFraseComponent } from './consumer-dime-frase/consumer-dime-frase.component';
import { AllowDriveFormComponent } from './allow-drive-form/allow-drive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumerDiceComponent,
    ConsumerDimeFraseComponent,
    AllowDriveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
