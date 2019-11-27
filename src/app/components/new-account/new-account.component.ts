import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from 'src/app/services/account-service.service';
import { Account } from 'src/app/models/Account';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor(private accountService:AccountServiceService) { }

  ngOnInit() {
  }

  onCreateNewAccount(){
    this.accountService.createNewAccount({name:'acc54', balance:344}).subscribe(response=>{
      console.log(response);
    })
    console.log("created new account");
  }
}
