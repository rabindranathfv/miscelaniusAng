import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from '../app/components/home/home.component';
import { UserComponent } from '../app/components/user/user.component';
import { NewUserComponent } from '../app/components/user/new-user/new-user.component';
import { EditUserComponent } from '../app/components/user/edit-user/edit-user.component';
import { DetailsUserComponent } from '../app/components/user/details-user/details-user.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent},
  {
    path: 'user/:id',
    component: UserComponent,
    children: [
      { path: 'new-user', component: NewUserComponent},
      { path: 'edit-user', component: EditUserComponent},
      { path: 'details-user', component: DetailsUserComponent},
      { path: '**', pathMatch: 'full', redirectTo: 'new-user'}
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
