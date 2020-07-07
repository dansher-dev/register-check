import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../services/register.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public SearchCountryField = SearchCountryField;
  public TooltipLabel = TooltipLabel;
  public CountryISO = CountryISO;
  public selectedCountry: any;
  public showError = false;
  public registerForm = new FormGroup({
    gender: new FormControl(this.translate.currentLang === 'ger' ? 'Herr' : 'Mr.', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    phone: new FormControl(undefined, [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(
    private registerService: RegisterService,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe(data => {
        this.registerService.id = data;
        this.registerService.getPartner();
      });
    this.selectedCountry = this.CountryISO.Switzerland;
  }

  public onSend(): void {
    if (this.registerForm.valid) {
      const user = {
        salutation: this.registerForm.get('gender').value,
        firstName: this.registerForm.get('name').value,
        lastName: this.registerForm.get('lastName').value,
        postalCode: this.registerForm.get('zipCode').value,
        city: this.registerForm.get('city').value,
        mobilePhoneNumber: this.registerForm.get('phone').value.e164Number,
        email: this.registerForm.get('email').value
      };
      this.registerService.sendRegister(user);
    }
    else {
      this.showError = true;
    }
  }

}
