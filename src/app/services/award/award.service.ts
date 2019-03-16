import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Award } from '../../models/award';
import { tokenKey } from '@angular/core/src/view';

import { LoginService } from '../../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AwardService {

  awardList: AngularFireList<any>;
  selectAward: Award = new Award();

  constructor(private firebase: AngularFireDatabase, private loginService: LoginService) { }

  getAwards() {
    console.log(this.loginService.getIdToken());
    return this.awardList = this.firebase.list('awards');
  }

  insertAward(award: Award) {
    this.awardList.push({
      name: award.name,
      cost: award.cost,
      description: award.description,
      amount: award.amount
    });
  }

  updateProduct(award) {
    this.awardList.update(award.$key, {
      name: award.name,
      cost: award.cost,
      description: award.description,
      amount: award.amount
    });
  }

  deleteProduct($key: string) {
    this.awardList.remove($key);
  }
}
