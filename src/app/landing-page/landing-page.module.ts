import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPagePage } from './landing-page.page';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { AgmCoreModule } from '@agm/core';
import { DashboardsModule } from '../modals/dashboards/dashboards.module';
import { DashboardModal } from '../modals/dashboards/dashboards.modal';
const routes: Routes = [
  {
    path: '',
    component: LandingPagePage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DashboardsModule,
    [RouterModule.forChild(routes)],
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBx6vlK-59qqy1PqPfFbv7Ana5vLLW6jk0',//'AIzaSyCa7iIz7MiRWeFOnK-9iS4x1ClFV6gqnyg',
      libraries: ['geometry', 'drawing', 'places', 'visualization']
    })
  ],
  declarations: [LandingPagePage],
  entryComponents: [DashboardModal]
})
export class LandingPagePageModule {}
