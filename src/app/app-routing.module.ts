import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountsSectionComponent } from './components/accounts-section/accounts-section.component';


const routes: Routes = [
  { path: 'account/:id', component:AccountDetailsComponent },
  { path: 'accounts', component:AccountsSectionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
