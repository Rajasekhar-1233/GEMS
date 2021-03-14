import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RapmHeaderComponent } from './rapm-header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('RapmHeaderComponentComponent', () => {
  let component: RapmHeaderComponent;
  let fixture: ComponentFixture<RapmHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapmHeaderComponent ],      
      imports: [IonicModule.forRoot(),HttpClientModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RapmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
