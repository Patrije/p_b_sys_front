import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/app/models/Account';
import { AccountServiceService } from 'src/app/services/account-service.service';

@Component({
  selector: 'app-big-button',
  templateUrl: './big-button.component.html',
  styleUrls: ['./big-button.component.css']
})
export class BigButtonComponent implements OnInit {

  @Input() account:Account;

  constructor(private accountService:AccountServiceService) {}

  ngOnInit() {
 
  }

  onClick(account:Account){
    console.log(account);
  }
}
