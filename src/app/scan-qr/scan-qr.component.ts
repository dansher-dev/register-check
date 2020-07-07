import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {RegisterService} from '../services/register.service';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.component.html',
  styleUrls: ['./scan-qr.component.scss']
})
export class ScanQrComponent implements OnInit {

  codeFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(
    private registerService: RegisterService
  ) { }

  ngOnInit(): void {
  }

  public onNext(): void {
    if (this.codeFormControl.valid) {
      this.registerService.completeScan(this.codeFormControl.value);
    }
  }

}
