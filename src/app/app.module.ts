import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Params, RouterStateSnapshot } from '@angular/router';

import { NgxsModule, StateContext } from '@ngxs/store';
import { NgxsHmrLifeCycle, NgxsHmrSnapshot as Snapshot } from '@ngxs/hmr-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule, RouterStateSerializer } from '@ngxs/router-plugin';


import { AppRoutingModule } from './app-routing.module';
import { AppContainer } from "./app-container/app-container";

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
  declarations: [AppContainer],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomRouterStateSerializer
    },
  ],
  bootstrap: [AppContainer]
})

export class AppModule { }
// export class AppModule implements NgxsHmrLifeCycle<Snapshot> {
//   public hmrNgxsStoreOnInit(
//     ctx: StateContext<Snapshot>,
//     snapshot: Partial<Snapshot>
//   ): void {
//     ctx.patchState(snapshot);
//   }

//   public hmrNgxsStoreBeforeOnDestroy(ctx: StateContext<Snapshot>): Partial<Snapshot> {
//     return ctx.getState();
//   }
// }
