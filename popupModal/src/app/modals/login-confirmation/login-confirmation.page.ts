import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-login-confirmation',
  templateUrl: './login-confirmation.page.html',
  styleUrls: ['./login-confirmation.page.scss'],
})
export class LoginConfirmationPage implements OnInit {

  

  constructor(
    private modalController: ModalController,
   
  ) { }

  ngOnInit() {
  
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
