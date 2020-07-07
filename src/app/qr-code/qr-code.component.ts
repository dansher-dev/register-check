import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../services/register.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit {
  public title = 'COMPLETED.REGISTERCODE';
  public subtitle = 'COMPLETED.PRESENT';
  public farewell = 'COMPLETED.TAKESCREEN';
  public queryParams = {
    id: '',
    pc: ''
  };

  constructor(
    private registerService: RegisterService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
        if (data.id && data.pc) {
          this.queryParams.id = data.id;
          this.queryParams.pc = data.pc;
          console.log(this.queryParams);
          this.title = 'READY.GETIN';
          this.subtitle = 'READY.PRESENT';
          this.farewell = 'READY.HAVEFUN';
        }
      });
  }

  get qrCode(): string {
    return this.registerService.qrCode;
  }

}
