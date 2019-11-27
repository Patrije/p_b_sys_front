import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigButtonComponent } from './components/big-button/big-button.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TopBarItemComponent } from './components/top-bar-item/top-bar-item.component';
import { TransactionRowItemComponent } from './components/transaction-row-item/transaction-row-item.component';
import { HttpClientModule } from '@angular/common/http';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { HistoryComponent } from './components/history/history.component';
import { NewTransferComponent } from './components/new-transfer/new-transfer.component';
import { AccountsSectionComponent } from './components/accounts-section/accounts-section.component';
import { ModalComponent } from './components/modal/modal.component';
import { TransferModalComponent } from './components/transfer-modal/transfer-modal.component';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BigButtonComponent,
    TopBarComponent,
    TopBarItemComponent,
    TransactionRowItemComponent,
    NewAccountComponent,
    HistoryComponent,
    NewTransferComponent,
    AccountsSectionComponent,
    ModalComponent,
    TransferModalComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  exports: [ TransferModalComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
