import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { HomepageComponent } from './homepage/homepage.component';
import {SocialLoginModule,AuthServiceConfig, GoogleLoginProvider} from "angularx-social-login";

let config = new AuthServiceConfig([
  {
    id:GoogleLoginProvider.PROVIDER_ID,
    provider:new GoogleLoginProvider("1078204311210-1h012vmgmrncursd4tk1jtsgcn7u7s7m.apps.googleusercontent.com")
  }
]);

export function provideConfig(){
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    {
    provide:AuthServiceConfig,
    useFactory:provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
