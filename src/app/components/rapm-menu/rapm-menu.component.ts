import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rapm-menu',
  templateUrl: './rapm-menu.component.html',
  styleUrls: ['./rapm-menu.component.scss'],
})
export class RapmMenuComponent implements OnInit {
  appPage: any[]
  appPages: any;
  constructor() { }

  ngOnInit() {
    this.appPages = {

      "Oemadmin": [
        {
          title: 'Dashboard',
          url: '/tracking',
          icon: 'person-add'
        },
        {
          title: 'User management',
          url: '/user-registration',
          icon: 'person-add'
        }

      ],
    };
    this.appPage = this.appPages.Oemadmin
  }

}
