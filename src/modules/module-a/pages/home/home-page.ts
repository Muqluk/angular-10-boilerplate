import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  template: `Module A`
})
export class HomePage {
  constructor(private router: Router) {
    console.log(router.config); // eslint-disable-line
  }
}