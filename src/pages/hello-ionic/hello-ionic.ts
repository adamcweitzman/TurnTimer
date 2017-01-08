import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CreateNewGamePage } from '../create-new-game/create-new-game';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
  public name: any;
  public color: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

}

  newGameAlert(): void {
  	let prompt = this.alertCtrl.create({
  		title: 'New Game Form',
  		message: 'Enter game details below',
  		inputs: [
  		{
  			name: 'name',
  			placeholder: 'name'
  		},
		{
  			name: 'color',
  			placeholder: 'color'
  		}

  		],
  		buttons: [
  			{
  				text: 'Cancel'
  			},
  			{
  				text: 'Save',
  				handler: data => {
  					this.name = data.name;
  					this.color = data.color;
  				} 
  			}
  		]
  	});

  	prompt.present();
  }

  // newGameTapped() {
  //   this.navCtrl.push(CreateNewGamePage, {
  //   });
  // }
}
