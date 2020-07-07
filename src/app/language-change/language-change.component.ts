import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-change',
  templateUrl: './language-change.component.html',
  styleUrls: ['./language-change.component.scss']
})
export class LanguageChangeComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

}
