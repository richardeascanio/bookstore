import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { ListBooksComponent } from './components/admin/list-books/list-books.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { AuthGuard } from './guards/auth.guard';

// The order of the routes are important. The fist match is the one you are going into
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offers', component: OffersComponent, canActivate: [AuthGuard] }, // only auth user can access this route
  { path: 'book/:id', component: DetailsBookComponent },
  { path: 'admin/list-books', component: ListBooksComponent, canActivate: [AuthGuard] }, // only auth user can access this route
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard] }, // only auth user can access this route
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
