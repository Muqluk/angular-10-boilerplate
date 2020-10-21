import { Component, ViewEncapsulation } from '@angular/core';
import { DrawerComponent, DrawerItem, DrawerMode } from "@progress/kendo-angular-layout";

import { Route, Router, RouterEvent, NavigationStart, NavigationEnd } from "@angular/router";

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
  public mode = "overlay";
  public mini = true;

  constructor(router: Router) {
    this.expanded = false;
    this.loading = false;
    this.routes = router.config;
    router.events.subscribe(this.routerEventSubscriber);
    this.routes.forEach((route: any) => {
      this.items.push({
        text: route.text,
        path: route.path ? route.path : '',
        icon: route.icon,
      });
    });
  }

  routerEventSubscriber(e: any): void { // eslint-disable-line
    if (e instanceof NavigationStart) {
      console.log("router event {e}: ", e);// eslint-disable-line
      this.loading = true;
    } else if (e instanceof NavigationEnd) {
      console.log("router event {e}: ", e);// eslint-disable-line
      this.loading = false;
    }
  }

  pinMenu(): void {
    this.isPinned = !this.isPinned;
    this.mode = this.isPinned ? 'push' : 'overlay';
    this.mini = !this.isPinned;
  }

  onSelect(item: any) {
    console.log(item);
  }

  toggleDrawer(drawer: DrawerComponent): void {
    drawer.toggle();
  }
}
