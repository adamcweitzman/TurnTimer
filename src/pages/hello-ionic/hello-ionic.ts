import { Component, Injectable  } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CreateNewGamePage } from '../create-new-game/create-new-game';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

@Injectable()
export class HelloIonicPage {
  public gameName: any;
  public number_of_players: any;
  public game: FirebaseListObservable<any>;
  public randomId: any;
  public admin: string;
  public your_name: string;
  private db: any;
  private ref: any;
  private gameRef: any;
  private joinGame: FirebaseListObservable<any>;
  private playerArray: any;
  private firstName: any;
  private initials: any;




	constructor(public navCtrl: NavController, public alertCtrl: AlertController, af: AngularFire) {
		this.game = af.database.list('/games');
    // this.db = firebase.database().ref('/');
    // this.gameRef = firebase.database().ref ('games');
    // this.gameRef.on('join_game_alert');
	}

  combinePlayerName(firstName, initials): string {
    console.log(initials);
    let lastLetter = initials.slice(1);

    return firstName + lastLetter;
  }

   newGameAlert(): void {
   	this.randomId = Math.floor(Math.random() * 500);
    this.playerArray = ["player1"];
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
            this.admin = data.admin;
            this.firstName = data.your_name;

  					this.game.push({
  						game_name: data.gameName,
  						number_of_players: data.number_of_players,
  						random_id: this.randomId,
  						admin: data.admin,
  						first_name: data.your_name,
              player_array: this.combinePlayerName(this.firstName, this.admin)
  					})
  					this.gameName = data.gameName;
  					this.number_of_players = data.number_of_players;
  				} 
  			}
  		]
  	});

  	prompt.present();
  } 

  joinGameAlert(af): void {
     let prompt = this.alertCtrl.create({
      title: 'Join Game',
      message: 'Enter game details below',
      inputs: 
      [
        {
          name: 'firstName',
          placeholder: 'first name'
        },
        {
          name: 'initials',
          placeholder: 'initials'
        },
        {
          name: 'gameId',
          placeholder: 'game Id'
        },
      ],
      buttons: 
      [
        {
          text: 'Save',
          handler: data => 
          {
            this.game.push({
              first_name: data.firstName,
              initials: data.initials,
              gameId: data.gameId
            })
          } 
        }
      ]
    });

    prompt.present();

   // let game = af.database.list('games', {
   //    query: {
   //        equalTo: 'Kb_yFoF9rw5V5YLTKw6'
   //    }
   //  })

    // console.log(game)
  }





}
