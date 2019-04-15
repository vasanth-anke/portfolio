import { Injectable } from '@angular/core';
import { WindowService } from './window.service';

@Injectable({
  providedIn: 'root'
})
export class AppLoadService {

  isMobileResolution: boolean = false;

  constructor(private windowService: WindowService) { }

  checkMobileResolution(){
    if (this.windowService.nativeWindow.innerWidth < 700) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

}
