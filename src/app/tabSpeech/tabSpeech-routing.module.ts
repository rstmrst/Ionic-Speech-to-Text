import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tabSpeechPage } from './tabSpeech.page';

const routes: Routes = [
  {
    path: '',
    component: tabSpeechPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class tabSpeechPageRoutingModule {}
