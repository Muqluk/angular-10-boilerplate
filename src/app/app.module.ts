import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Params, RouterStateSnapshot } from '@angular/router';

import { NgxsModule, StateContext } from '@ngxs/store';
import { NgxsHmrLifeCycle, NgxsHmrSnapshot as Snapshot } from '@ngxs/hmr-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule, RouterStateSerializer } from '@ngxs/router-plugin';

import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { PopupModule } from '@progress/kendo-angular-popup';


import { AppRoutingModule } from './app-routing.module';

import { AppContainer } from "./app-container/app-container";
import { HomePage } from "./app-container/pages/home/home-page"

export interface RouterStateParams {
  url: string;
  params: Params;
  queryParams: Params;
}

// Map the router snapshot to { url, params, queryParams }
export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateParams> {
  serialize(routerState: RouterStateSnapshot): RouterStateParams {
    const {
      url,
      root: { queryParams }
    } = routerState;

    let { root: route } = routerState;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const { params } = route;

    return { url, params, queryParams };
  }
}

@NgModule({
  declarations: [
    AppContainer,
    HomePage,
  ],
  entryComponents: [HomePage],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    AppRoutingModule,
    /* Kendo Modules */
    ButtonsModule,
    LayoutModule,
    PopupModule,
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomRouterStateSerializer
    },
  ],
  bootstrap: [AppContainer]
})

export class AppModule implements NgxsHmrLifeCycle<Snapshot> {
  public hmrNgxsStoreOnInit(
    ctx: StateContext<Snapshot>,
    snapshot: Partial<Snapshot>
  ): void {
    ctx.patchState(snapshot);
  }

  public hmrNgxsStoreBeforeOnDestroy(ctx: StateContext<Snapshot>): Partial<Snapshot> {
    return ctx.getState();
  }
}
