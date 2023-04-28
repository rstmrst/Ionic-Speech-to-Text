import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tabSpeechPage } from './tabSpeech.page';

import { tabSpeechPageRoutingModule } from './tabSpeech-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, tabSpeechPageRoutingModule],
  declarations: [tabSpeechPage],
})
export class tabSpeechPageModule {}
