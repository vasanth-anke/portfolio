import { Injectable } from '@angular/core';
import { WindowService } from './window.service';

@Injectable({
  providedIn: 'root'
})
export class AppLoadService {

  constructor(private windowService: WindowService) { }

  isMobileWidth(){
    if (this.windowService.nativeWindow.innerWidth < 700) {
      return true;
    } else {
      return false;
    }
  }

}
