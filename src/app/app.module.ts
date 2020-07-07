import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageChangeComponent } from './language-change/language-change.component';
import { EntranceComponent } from './entrance/entrance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ScanQrComponent } from './scan-qr/scan-qr.component';
import {MatInputModule} from '@angular/material/input';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ConfirmInfoComponent } from './confirm-info/confirm-info.component';
import { RegistrationComponent } from './registration/registration.component';
import {NgxIntlTelInputModule} from 'ngx-intl-tel-input';
import {QrCodeModule} from 'ng-qrcode';
import { QrCodeComponent } from './qr-code/qr-code.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


export function HttpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    LanguageChangeComponent,
    EntranceComponent,
    ScanQrComponent,
    ConfirmInfoComponent,
    RegistrationComponent,
    QrCodeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    ZXingScannerModule,
    NgxIntlTelInputModule,
    QrCodeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
