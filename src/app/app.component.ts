import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from './services/account-service.service';
import { Account } from './models/Account';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TransferModalComponent } from './components/transfer-modal/transfer-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   router: string;

  constructor(private _router: Router){

          this.router = _router.url; 
    }

}
