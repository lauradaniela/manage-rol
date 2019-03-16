import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string;

  constructor(private router: Router, private firebase: AngularFireAuth) { }

  login(email: string, password: string) {
    this.firebase.auth.signInWithEmailAndPassword(email, password).then(
      response => {
        this.firebase.auth.currentUser.getIdToken()
          .then(
            token => {
              this.token = token;
            }
          );
      }
    );
    this.router.navigate(['/awards']);
  }

  getIdToken() {
    return this.token;
  }
}
