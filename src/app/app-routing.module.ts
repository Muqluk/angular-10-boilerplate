import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from "./app-container/pages/home/home-page";


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomePage,
        pathMatch: 'full',
      },
      {
        path: 'mod-a',
        loadChildren: () => import('modules/module-a/mod-a.module').then(m => m.ModAModule)
      },
      {
        path: 'mod-b',
        loadChildren: () => import('modules/module-b/mod-b.module').then(m => m.ModBModule)
      },
      {
        path: 'mod-c',
        loadChildren: () => import('modules/module-c/mod-c.module').then(m => m.ModCModule)
      },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
