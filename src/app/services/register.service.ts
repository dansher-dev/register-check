import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

interface IGuestData {
  salutation: string;
  firstName: string;
  lastName: string;
  city: string;
  postalCode: string;
  mobilePhoneNumber: string;
  email: string;
}

export interface IPartner {
  id: string;
  name: string;
  city: string;
  postalCode: string;
  mobilePhone: string;
  email: string;
  clubLogoUrl: string;
  sponsorLogoUrl: string;
  language: string;
  status?: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public id = '';
  public qrCode = '';
  public partner: IPartner;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  public completeScan(code: string): void {
    this.id = code;
    this.router.navigate(['/' + this.id]);
  }

  public startRegister(): void {
    this.router.navigate(['/register/' + this.id]);
  }

  public getPartner(): void {
    if (this.id) {
      this.http.get<IPartner>(environment.partnerUrl + this.id).subscribe((data: IPartner)  => {
        if (!data.status)  {
          this.partner = data;
        } else {
          console.log(data);
        }
      });
    }
  }

  public sendRegister(user: IGuestData): void {
    this.http.post<{verificationCode: string}>(environment.registerHost, {clubId: 0, guestData: user})
      .subscribe(data => {
        if (data.verificationCode) {
          this.qrCode = data.verificationCode;
          this.router.navigate(['/confirm-success']);
        } else {
          console.log(data);
        }
      });
  }
}
