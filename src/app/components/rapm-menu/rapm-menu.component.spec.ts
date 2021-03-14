import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RapmMenuComponent } from './rapm-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('RapmMenuComponent', () => {
  let component: RapmMenuComponent;
  let fixture: ComponentFixture<RapmMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapmMenuComponent ],
      imports: [IonicModule.forRoot(),HttpClientModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RapmMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
