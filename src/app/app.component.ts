import {Component, OnInit} from '@angular/core';
import {TranslationsService} from './services/translations.service';
import {TranslateService} from '@ngx-translate/core';
import {IPartner, RegisterService} from './services/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  constructor(
    public translate: TranslateService,
    private translationService: TranslationsService,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.translationService.getLocation();
  }

  get partner(): IPartner {
    return this.registerService.partner;
  }

  get partnerLogo(): string {
    return this.registerService.partner.clubLogoUrl;
  }

  get partnerBanner(): string {
    return this.registerService.partner.sponsorLogoUrl;
  }
}
