import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import {Data} from './providers/data/data';
import { AppModule } from './app.module';
import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class Data {
	private _games$: any;
	private _db: any;
	private _gamesRef: any;

	constructor() {
		this._db = firebase.database().ref('/');
		this._gamesRef = firebase.database().ref('games');
		this._gamesRef.on('child_added', this.handleData, this);
		this._games$ = new ReplaySubject();
	}
	get games()
	{
		return this._games$
	}

	handleData(snap)
	{
		try {
			this._games$.next(snap.val())
		}
		catch (error) {
			console.log('caught error ', error);
		}
	}
}

platformBrowserDynamic().bootstrapModule(AppModule);



