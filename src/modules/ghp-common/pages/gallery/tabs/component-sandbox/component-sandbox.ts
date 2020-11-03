import { Component } from "@angular/core";

@Component({
  selector: 'component-sandbox',
  styleUrls: ['component-sandbox.scss'],
  templateUrl: 'component-sandbox.html',
})
export class ComponentSandbox {
  toggled = false;

  clicky() {
    this.toggled = !this.toggled;
  }
}