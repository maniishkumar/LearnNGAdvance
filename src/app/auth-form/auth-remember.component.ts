import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'auth-remember',
  template: `
    <label>
      <input type="checkbox" (change)="onChecked($event)" style="display: inline">
      <span style="display: inline;">Keep me logged in</span>
    </label>
  `
})
export class AuthRememberComponent {

  @Output() checked: EventEmitter<any> = new EventEmitter<any>();

  onChecked(value: any) {
    this.checked.emit(value);
  }

}