import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor() { }


  _window() : any {
    // return the global native browser window object
    return window;
  }
  public get nativeWindow() : any {
    return this._window();
  }
}
