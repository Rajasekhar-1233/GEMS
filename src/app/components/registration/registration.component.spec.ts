import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrationComponent } from './registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { IonicStorageModule } from '@ionic/storage';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  var originalTimeout;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot(), RouterTestingModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Call myDismiss', async () => {
    spyOn(component.modalController, 'dismiss');
    await component.myDismiss();
    expect(component.modalController.dismiss).toHaveBeenCalled();
  });
  
  it('Call presentAlert', async () => {
    spyOn(component.alertController, 'create').and.callThrough();
    await component.presentAlert("alert", "alert", ["OK"]);
    expect(component.alertController.create).toHaveBeenCalled();
    component.alertController.dismiss();
  });

  it('should handle Error', () => {
    spyOn(component, 'presentAlert');
    component.handleError({ message: 'message' });
    expect(component.presentAlert).toHaveBeenCalled();
  })

});
