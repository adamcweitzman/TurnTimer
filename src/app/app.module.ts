import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { CreateNewGamePage } from '../pages/create-new-game/create-new-game';
import { AngularFireModule } from 'angularfire2';
import { GameRoomPage } from '../pages/game-room/game-room';


export const firebaseConfig = {
    apiKey: "AIzaSyARdmAPS_y9DIzcoHeveQi4uV65Ue-DLBk",
    authDomain: "turntimer-5297e.firebaseapp.com",
    databaseURL: "https://turntimer-5297e.firebaseio.com",
    storageBucket: "turntimer-5297e.appspot.com",
    messagingSenderId: "95605234290"
};

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    CreateNewGamePage,
    GameRoomPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    CreateNewGamePage,
    GameRoomPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
