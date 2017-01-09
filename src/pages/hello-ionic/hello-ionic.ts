import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CreateNewGamePage } from '../create-new-game/create-new-game';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
  public gameName: any;
  public number_of_players: any;
  public game: FirebaseListObservable<any>
  public randomId: any;
  public admin: string;
  public your_name: string;



	constructor(public navCtrl: NavController, public alertCtrl: AlertController, af: AngularFire) {
		this.game = af.database.list('/games');
		console.log(this.randomId);
	}

   newGameAlert(): void {
   	this.randomId = Math.floor(Math.random() * 500);
   	let prompt = this.alertCtrl.create({
  		title: 'New Game Form',
  		message: 'Enter game details below',
  		inputs: 
  		[
	  		{
	  			name: 'gameName',
	  			placeholder: 'game name'
	  		},
			{
	  			name: 'number_of_players',
	  			placeholder: 'number of players'
	  		},
	  		{
	  			name: 'your_name',
	  			placeholder: 'your first name'
	  		},
	  		{
	  			name: 'admin',
	  			placeholder: 'your initials'
	  		},
  		],

  		buttons: 
  		[
  			{
  				text: 'Save',
  				handler: data => 
  				{
  					this.game.push({
  						game_name: data.gameName,
  						number_of_players: data.number_of_players,
  						randomId: this.randomId,
  						admin: data.admin,
  						first_name: data.your_name
  					})
  					this.gameName = data.gameName;
  					this.number_of_players = data.number_of_players;
  				} 
  			}
  		]
  	});

  	prompt.present();
  }

}
