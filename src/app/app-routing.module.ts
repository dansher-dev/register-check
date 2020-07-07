import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntranceComponent} from './entrance/entrance.component';
import {ScanQrComponent} from './scan-qr/scan-qr.component';
import {ConfirmInfoComponent} from './confirm-info/confirm-info.component';
import {RegistrationComponent} from './registration/registration.component';
import {QrCodeComponent} from './qr-code/qr-code.component';


const routes: Routes = [
  {path: 'scan', component: ScanQrComponent},
  {path: 'confirm-success', component: QrCodeComponent},
  {path: 'showCode', component: QrCodeComponent},
  {path: 'register/:id', component: RegistrationComponent},
  {path: ':id', pathMatch: 'full', component: ConfirmInfoComponent},
  {path: '', component: EntranceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
