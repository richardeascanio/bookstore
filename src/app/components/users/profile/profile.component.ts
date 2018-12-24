import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserInterface } from '../../../models/user';
import { BookInterface } from '../../../models/book';
import { DataApiService } from '../../../services/data-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService, private dataApi: DataApiService) { }

  user: UserInterface = {
    name: '',
    email: '',
    photoUrl: '',
    roles: {}
  };
  private books: BookInterface[];
  public uid = '';
  public providerId = 'null';

  ngOnInit() {
    this.authService.isAuth().subscribe(user => {
      if (user) {
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.user.photoUrl = user.photoURL;
        this.providerId = user.providerData[0].providerId;
        console.log(user);
        this.uid = user.uid;
        this.getOwnedBooks(this.uid);
      }
    });
  }

  getOwnedBooks(uid: string) {
    this.dataApi.getAllOwnedBooks(uid).subscribe(libros => {
      this.books = libros;
    });
  }

}
