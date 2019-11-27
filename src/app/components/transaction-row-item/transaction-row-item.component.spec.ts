import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionRowItemComponent } from './transaction-row-item.component';

describe('TransactionRowItemComponent', () => {
  let component: TransactionRowItemComponent;
  let fixture: ComponentFixture<TransactionRowItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionRowItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionRowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
