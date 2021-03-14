import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RapmHeaderComponent } from '../components/rapm-header/rapm-header.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes=[];

@NgModule({
    declarations: [
        RapmHeaderComponent,
        RegistrationComponent
    ],
    imports: [IonicModule, CommonModule, ReactiveFormsModule,FormsModule, RouterModule.forChild(routes)],
    exports: [
        RapmHeaderComponent, 
        RegistrationComponent
    ],
    providers: [
    ],
    entryComponents:[RapmHeaderComponent,RegistrationComponent]
  })
  export class ComponentsModule {}