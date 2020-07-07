import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RegisterService} from '../services/register.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-confirn-info',
  templateUrl: './confirm-info.component.html',
  styleUrls: ['./confirm-info.component.scss']
})
export class ConfirmInfoComponent implements OnInit {

  public confirmAccuracy = false;
  public allowUsage = false;
  public showPopUp = false;

  constructor(
    private registerService: RegisterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe(data => {
        this.registerService.id = data;
        this.registerService.getPartner();
      });
  }

  public onStart(): void {
    if (this.allowUsage && this.confirmAccuracy) {
      this.registerService.startRegister();
    }
  }

}
