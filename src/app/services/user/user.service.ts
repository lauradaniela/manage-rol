import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { User } from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getAllUsers() {
    return this.userList = this.firebase.list('users');
  }

  insertAward(user: User) {
    this.userList.push({
      userName: user.userName,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      rol: user.rol,
      points: user.points
    });
  }

  updateProduct(user: User) {
    this.userList.update(user.id, {
      userName: user.userName,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      rol: user.rol,
      points: user.points
    });
  }

  deleteProduct(id: string) {
    this.userList.remove(id);
  }
}
