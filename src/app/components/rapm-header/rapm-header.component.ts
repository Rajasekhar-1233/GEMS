import { Component, Input, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-rapm-header',
  templateUrl: './rapm-header.component.html',
  styleUrls: ['./rapm-header.component.scss'],
})
export class RapmHeaderComponent implements OnInit {
  @Input()
  pageTitle: string;
  fullName: string = 'Raja sekhar';
  constructor(
    public events: Events,
  ) {}
  ngOnInit() {}
}