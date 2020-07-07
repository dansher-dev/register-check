import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationsService {

  constructor(
    private http: HttpClient,
    private translate: TranslateService
  ) { }

  public getLocation(): void {
    this.translate.addLangs(['en', 'ger']);
    this.translate.setDefaultLang('ger');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|ger/) ? browserLang : 'ger');
  }
}
