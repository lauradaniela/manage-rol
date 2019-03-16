import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AwardService } from '../../services/award/award.service';
import { Award } from '../../models/award';

@Component({
  selector: 'app-add-award',
  templateUrl: './add-award.component.html',
  styleUrls: ['./add-award.component.scss']
})
export class AddAwardComponent implements OnInit {

  awardForm: FormGroup;

  constructor(private form: FormBuilder, private awardService: AwardService) { }

  ngOnInit() {
    this.awardService.getAwards();
    this.awardForm = this.form.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      cost: ['', Validators.compose([Validators.required])],
      amount: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required, Validators.maxLength(200)])]
    });
  }

  onSubmit() {
    const award: Award = new Award();
    award.name = this.awardForm.get('name').value;
    award.cost = this.awardForm.get('cost').value;
    award.description = this.awardForm.get('description').value;
    award.amount = this.awardForm.get('amount').value;
    this.awardService.insertAward(award);
    this.resetForm();
  }

  resetForm() {
    this.awardForm.reset();
  }

}
