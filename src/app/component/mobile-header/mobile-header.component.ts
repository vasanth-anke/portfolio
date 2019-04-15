import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent implements OnInit {

  isMenuVisible: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showMenu(){
    this.isMenuVisible = true;
  }

  hideMenu(){
    this.isMenuVisible = false;
  }


}
