import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AmplifyUIAngularModule,
    AmplifyAngularModule,
    ToastrModule.forRoot()
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
