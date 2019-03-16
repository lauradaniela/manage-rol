import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Award } from '../../models/award';

@Injectable({
  providedIn: 'root'
})
export class AwardService {

  awardList: AngularFireList<any>;
  selectAward: Award = new Award();

  constructor(private firebase: AngularFireDatabase) { }

  getAwards() {
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
