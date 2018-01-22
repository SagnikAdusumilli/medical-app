import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {AgmCoreModule} from '@agm/core';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './header.component';
import { routing } from './app.routing';
import { AuthService } from './auth/auth.service';
import { ErrorComponent } from './errors/error.component';
import { ErrorService } from './errors/error.service';
import { MessageModule } from './messages/message.module';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent,
        HomeComponent,
        MapComponent
    ],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBhyNvQBvy-ulIDXzZrRqKFimzSLDPZYT8'
        }),
        BrowserModule,
        routing,
        HttpModule,
        MessageModule,
        AuthModule
    ],
    providers: [AuthService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
