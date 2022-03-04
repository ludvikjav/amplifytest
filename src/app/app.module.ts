import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';;
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
//import {AmplifyUIAngularModule} from "@aws-amplify/ui-angular";

import { AppComponent } from './app.component';
import awsconfig from '../aws-exports';
import Amplify from 'aws-amplify';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AmplifyAuthenticatorModule,
            AppRoutingModule, FormsModule,
            ReactiveFormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}