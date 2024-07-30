import { Injectable } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyCount=0;
  constructor(private spinnerService: NgxSpinnerService) {}

  busy(){
    this.busyCount++;
    this.spinnerService.show(undefined, {type:'line-scale-party', bdColor:'rgba(255,255,255,0)', color:'#333333'})
  }

  idle(){
    this.busyCount--;
    if(this.busyCount <= 0){
      this.busyCount = 0;
    }
  }
}
