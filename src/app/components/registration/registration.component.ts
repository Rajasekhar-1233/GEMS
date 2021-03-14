import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { RestoperationsService } from 'src/app/services/rest/restoperations.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
    registrationForm: FormGroup;
    @Input() editUser;
    @Input() userInfo;
    isDisabled: boolean = false;
    ionHeaderTitleAddOrEdit: String;
    usersData;

    validation_messages = {
        'firstname': [
            { type: 'required', message: 'First Name is required.' },
            { type: 'pattern', message: 'Enter only Alphabets.' },
            { type: 'maxlength', message: 'FirstName Maximum 20 Characters' },
        ], 'lastname': [
            { type: 'required', message: 'Last Name is required.' },
            { type: 'pattern', message: 'Enter only Alphabets.' },
            { type: 'maxlength', message: 'FirstName Maximum 20 Characters' },
        ], 'email': [
            { type: 'required', message: 'Email is required.' },
            { type: 'pattern', message: 'Please enter a valid email.' }
        ],
    };


    constructor(public loginService: RestoperationsService, public formBuilder: FormBuilder, public modalController: ModalController,
        public alertController: AlertController) {
        this.registrationForm = this.formBuilder.group({
            firstname: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('[a-zA-Z ]*'),
                Validators.maxLength(40),
            ])),
            lastname: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('[a-zA-Z ]*'),
                Validators.maxLength(40),
            ])),
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
            ]))
        });
    }

    async ngOnInit() {
    }

    ionViewWillEnter() {
        if (this.editUser == true) {
            this.registrationForm.patchValue({
                email: this.userInfo.email,
                firstname: this.userInfo.fname,
                lastname: this.userInfo.lname
            });
        }
    }


    async myDismiss() {
        const result: Date = new Date();
        await this.modalController.dismiss(result);
    }

    submitUserDetails() {
        if (this.editUser === true) {
            this.editUserData()
        }
        else {
            this.addNewUser()
        }
    }

    editUserData() {
     
        const data = this.registrationForm.value;
        this.usersData = {
            fname: data.firstname,
            lname: data.lastname,
            email: data.email,
        }
        this.loginService.updateData(this.usersData, this.userInfo.id).subscribe(
            (response) => {
                let alertButtonOnSuccessDetails = [
                    {
                        text: 'Okay',
                        handler: () => {
                            this.modalController.dismiss(this.usersData);
                        }
                    }
                ];
                this.presentAlert("User Edited succesfully.", alertButtonOnSuccessDetails);
            },
            (err) => {
                console.log("error", err);
                let alertButtonOnFailureDetails = ['Ok'];
                this.presentAlert(err.message, alertButtonOnFailureDetails);
            }
        )
    }

    addNewUser() {
        const data = this.registrationForm.value;
        this.usersData = {
            fname: data.firstname,
            lname: data.lastname,
            email: data.email,
        }

        this.loginService.addData(this.usersData).subscribe(
            (response) => {
                let alertButtonOnSuccessDetails = [
                    {
                        text: 'Okay',
                        handler: () => {
                            this.modalController.dismiss(this.usersData);
                        }
                    }
                ];
                this.presentAlert("User Added succesfully.", alertButtonOnSuccessDetails);
            },
            (err) => {
                console.log("error", err);
                let alertButtonOnFailureDetails = ['Ok'];
                this.presentAlert(err.message, alertButtonOnFailureDetails);
            }
        )

    }

    handleError(err) {
        const alertButtonOnFailureDetails = ['Ok'];
        this.presentAlert(err.message, alertButtonOnFailureDetails);
    }

    async presentAlert(alertMessage, alertButtons) {
        const alert = await this.alertController.create({
            // subHeader: alertSubHeader,
            message: alertMessage,
            buttons: alertButtons
        });
        await alert.present();
    }
}