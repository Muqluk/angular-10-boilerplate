import { Component } from "@angular/core";
import { Route, Router, RouterEvent, NavigationStart, NavigationEnd } from "@angular/router";

@Component({
  template: `
  <div>Module A Home Page</div>
  <div>
    <div routerLink="mod-a">Module Home</div>&nbsp;&nbsp;|&nbsp;&nbsp;
    <div routerLink="/mod-a/page-1">page-1</div>&nbsp;&nbsp;|&nbsp;&nbsp;
    <div routerLink="/mod-a/page-1">page-2</div>&nbsp;&nbsp;|&nbsp;&nbsp;
    <div routerLink="/mod-a/page-1">page-3</div>
  </div>
  `
})
export class HomePage {
  constructor(private router: Router) {
    console.log(router.config);
  }
}