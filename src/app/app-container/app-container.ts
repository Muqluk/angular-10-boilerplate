import { Component, ViewEncapsulation } from '@angular/core';
import { DrawerComponent, DrawerMode } from "@progress/kendo-angular-layout";

import { Route, Router, NavigationStart, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['app-container.scss'],
  templateUrl: 'app-container.html',
})
export class AppContainer {
  public loading: boolean;
  public routes: Array<Route> = [];
  public items: Array<any> = []
  public expanded: boolean;
  public isPinned = false;
  public mode: DrawerMode = "overlay";
  public mini = true;

  constructor(private router: Router) {
    this.expanded = false;
    this.loading = false;
    this.routes = router.config;
    router.events.subscribe(this.routerEventSubscriber);
    this.routes.forEach((route: any) => { // eslint-disable-line
      this.items.push({
        text: route.text,
        path: route.path ? route.path : '',
        icon: route.icon,
        type: 'routerLink',
      });
    });
    this.items.push({
      text: 'Log Out',
      icon: 'k-i-home',
      callbackFn: this.logOut,
    });
  }

  routerEventSubscriber = (e: any): void => { // eslint-disable-line
    if (e instanceof NavigationStart) {
      console.log("router event {e}: ", e);// eslint-disable-line
      this.loading = true;
    } else if (e instanceof NavigationEnd) {
      setTimeout(() => {
        console.log("router event {e}: ", e);// eslint-disable-line
        this.loading = false
      }, 250);
    }
  }

  pinMenu(): void {
    this.isPinned = !this.isPinned;
    this.mode = this.isPinned ? 'push' : 'overlay';
    this.mini = !this.isPinned;
  }

  onSelect(menuItem: any): void {// eslint-disable-line
    const { item } = menuItem;
    if (item.callbackFn) {
      item.callbackFn();
    } else {
      this.router.navigate([item.path]);
    }
  }

  toggleDrawer(drawer: DrawerComponent): void {
    drawer.toggle();
  }

  logOut(): void {
    console.log("log out clicked"); // eslint-disable-line
  }
}
