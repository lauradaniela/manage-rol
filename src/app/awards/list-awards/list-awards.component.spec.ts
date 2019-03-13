import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAwardsComponent } from './list-awards.component';

describe('ListAwardsComponent', () => {
  let component: ListAwardsComponent;
  let fixture: ComponentFixture<ListAwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
