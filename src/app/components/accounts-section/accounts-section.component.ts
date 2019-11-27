import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from 'src/app/services/account-service.service';
import { Account } from 'src/app/models/Account';

@Component({
  selector: 'app-accounts-section',
  templateUrl: './accounts-section.component.html',
  styleUrls: ['./accounts-section.component.css']
})
export class AccountsSectionComponent implements OnInit {

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(accounts=>{
      this.accounts = accounts;
    });
  }
    accounts:Account[];
    constructor(private accountService:AccountServiceService){
    }

    addTransfer(transfer:Object){
      this.accountService.createTransfer(transfer).subscribe(response=>{
        console.log(response);
      })
    }
}
