import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.css']
})
export class NewTransferComponent implements OnInit {

  @Output() addTransfer: EventEmitter<any> = new EventEmitter();
  title:string;
  amount:number;
  beneficiaryName:string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form:any){
    const transfer = {
      accountId:1,
      title: form.value.title,
      amount: this.amount,
      beneficiaryName: this.beneficiaryName
      
    }
    console.log(transfer.amount);
    this.addTransfer.emit(transfer)
  }
}
