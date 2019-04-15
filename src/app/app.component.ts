import { Component, HostListener } from '@angular/core';
import { AppLoadService } from './service/app-load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vasanth-anke';

  constructor(private appLoadService: AppLoadService  ){
    this.appLoadService.checkMobileResolution();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.appLoadService.checkMobileResolution();
  }
}
