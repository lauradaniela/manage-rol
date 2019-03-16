import { Component, OnInit } from '@angular/core';

import { AwardService } from '../../services/award/award.service';
import { Award } from '../../models/award';

@Component({
  selector: 'app-list-awards',
  templateUrl: './list-awards.component.html',
  styleUrls: ['./list-awards.component.scss']
})
export class ListAwardsComponent implements OnInit {

  awardList: Award[];

  constructor(private awardService: AwardService) { }

  ngOnInit() {
    this.getAllAwards();
  }

  getAllAwards() {
    this.awardService.getAwards()
    .snapshotChanges()
    .subscribe(award => {
      this.awardList = [];
      award.forEach(element => {
        const temp = element.payload.toJSON();
        temp['$key'] = element.key;
        this.awardList.push(temp as Award);
      });
    });
  }

  onEdit(award: Award) {
    this.awardService.updateProduct(award);
  }

  onDelete(award: Award) {
    this.awardService.deleteProduct(award.$key);
  }

}
