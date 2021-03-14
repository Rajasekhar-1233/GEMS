import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { FormControl } from '@angular/forms';

import { RegistrationComponent } from 'src/app/components/registration/registration.component';
import { RestoperationsService } from 'src/app/services/rest/restoperations.service';

@Component({
    selector: 'user-registration',
    templateUrl: './user-registration.page.html',
    styleUrls: ['./user-registration.page.scss'],
})
export class UserRegistrationPage implements OnInit {
    searchControl: FormControl = new FormControl(); fdata: any;
    pageTitle = 'User Registration';
    usersData: any = [];
    p = 1;
    data: any;
    constructor(public alertController: AlertController, public modalController: ModalController, public loginService: RestoperationsService) { }

    ngOnInit() {
        this.getUsersData();
    }

    async openAddUserDetailsModal() {
        const modal: HTMLIonModalElement = await this.modalController.create({
            component: RegistrationComponent,
            componentProps: {
                addUser: true,
                ionHeaderTitleAddOrEdit: "Enter User Details To Register",
            },
            backdropDismiss: false,
        });
        modal.onDidDismiss().then(() => this.getUsersData());
        await modal.present();
    }

    getUsersData() {
        this.loginService.getUsersData().subscribe(
            (response) => {
                let res: any = response;
                console.log("res :", res)
                this.fdata = res;
            })
    }

    async editUser(userData) {
        const modal: HTMLIonModalElement = await this.modalController.create({
            component: RegistrationComponent,
            componentProps: {
                editUser: true,
                userInfo: userData,
                ionHeaderTitleAddOrEdit: "Edit user detail",
            }
        });
        modal.onDidDismiss().then(() => this.getUsersData());
        await modal.present();
    }

    deleteSuccess(rulesData) {
        console.log("rulesData :", rulesData)
        this.loginService.delete(rulesData.id).subscribe(
            (response) => {
                let alertButtonOnSuccessDetails = [
                    {
                        text: 'Okay',
                        handler: () => {
                            this.modalController.dismiss(rulesData);
                        }
                    }
                ];
                this.presentAlert("User Deleted succesfully.", alertButtonOnSuccessDetails);
                this.getUsersData();
            })
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
