import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { TitleDecoratorDirective } from './directives/title-decorator.directive';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { NewUserComponent } from './components/user/new-user/new-user.component';
import { DetailsUserComponent } from './components/user/details-user/details-user.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    TitleDecoratorDirective,
    HomeComponent,
    UserComponent,
    EditUserComponent,
    NewUserComponent,
    DetailsUserComponent,
    NabvarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
