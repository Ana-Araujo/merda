import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 0d1c34675525b1e9da05218721bd6ba46317396b

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< HEAD
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
=======
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
>>>>>>> 0d1c34675525b1e9da05218721bd6ba46317396b
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
