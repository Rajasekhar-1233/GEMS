import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserRegistrationPage } from './user-registration.page';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { of, throwError } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PipesModule } from 'src/app/pipes/pipe.module';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RegistrationComponent } from 'src/app/components/registration/registration.component';
import { IonicStorageModule } from '@ionic/storage';
import { IonicStorageProvider } from 'src/app/providers/ionic-storage/ionic-storage';
import { StorageProvider } from 'src/app/providers/storage/storage.service';

describe('UserRegistrationPage', () => {
  let component: UserRegistrationPage;
  let fixture: ComponentFixture<UserRegistrationPage>;

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
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule,
        NgxPaginationModule, HttpClientTestingModule, PipesModule, IonicModule.forRoot(),IonicStorageModule.forRoot(),],
      declarations: [UserRegistrationPage, RegistrationComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: StorageProvider, useClass: IonicStorageProvider }]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [RegistrationComponent]
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getUsersData return 2 records', () => {
    spyOn(component.loginService, 'getUsersData').and.returnValue(of([{
      firstName: 'shabbir',
      lastName: 'dhangot',
    }, {
      firstName: 'chandan',
      lastName: 'dn',
    }]));
    component.getUsersData();
    expect(component.usersData.length).toBe(2);
  });

  it('should getUsersData return 0 records', () => {
    spyOn(component.loginService, 'getUsersData').and.returnValue(of([]));
    component.getUsersData();
    expect(component.usersData.length).toBe(0);
  });

  it('should getUsersData return error', () => {
    spyOn(component.loginService, 'getUsersData').and.returnValue(throwError({
      message: 'message'
    }));
    component.getUsersData();
    expect(component.usersData.length).toBe(0);
    expect(component.noUserFoundInRecord).toBeTruthy();
  });

  it('should open dialog', async () => {
    spyOn(component.modalController, 'create').and.callThrough();
    await component.openAddUserDetailsModal();
    expect(component.modalController.create).toHaveBeenCalled();
    component.modalController.dismiss();
  })
});
