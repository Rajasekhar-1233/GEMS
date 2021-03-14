import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as _ from 'lodash';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {
  constructor() { }

  ngOnInit() { }
  pageTitle: string = 'Dashboard';
}
