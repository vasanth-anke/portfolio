import { Component, HostListener } from '@angular/core';
import { AppLoadService } from './service/app-load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vasanth-anke';

  isMobileResolution: boolean = false;

  constructor(private appLoadService: AppLoadService  ){
    this.isMobileResolution = this.appLoadService.isMobileWidth();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.isMobileResolution =  this.appLoadService.isMobileWidth();
  }
}
