import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  accountUrl:string='http://localhost:8080/api/accounts';
  accountUrlPost:string='http://localhost:8080/api/account';
  accountUrlPostTransfer:string='http://localhost:8080/api/payment';

  constructor(private http:HttpClient) { }

  getAccounts():Observable<Account[]> {
  return this.http.get<Account[]>(this.accountUrl); 
  }

  createNewAccount(account:Object):Observable<Object>{
    return this.http.post<Object>(this.accountUrlPost, account);
  }

  createTransfer(transfer:Object):Observable<Object>{
    return this.http.post<Object>(this.accountUrlPostTransfer, transfer);
  }
}
