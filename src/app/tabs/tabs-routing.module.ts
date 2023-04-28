import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabSpeechPage',
        loadChildren: () =>
          import('../tabSpeech/tabSpeech.module').then(
            (m) => m.tabSpeechPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/tabSpeechPage',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tabSpeechPage',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
