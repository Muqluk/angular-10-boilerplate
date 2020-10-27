import { NgModule } from '@angular/core';
import { 
  // NoPreloading, 
  RouterModule 
} from '@angular/router';
import { HomePage } from "./app-container/pages/home/home-page";

const routes = [ // eslint-disasble-line
  {
    path: '',
    text: 'Home',
    component: HomePage,
    pathMatch: 'full',
    icon: 'k-i-home',
  },
  {
    path: 'gallery',
    text: 'Control Gallery',
    loadChildren: () => import('modules/ghp-common/ghp-common.module').then(m => m.GhpCommonModule),
    // loadChildren: 'modules/ghp-common/ghp-common.module#GhpCommonModule',
    icon: 'k-i-images'
  },
  // {
  //   path: 'mod-a',
  //   text: 'Module A',
  //   loadChildren: () => import('modules/module-a/mod-a.module').then(m => m.ModAModule),
  //   icon: 'k-i-form k-i-border'
  // },
  // {
  //   path: 'mod-b',
  //   text: 'Module B',
  //   loadChildren: () => import('modules/module-b/mod-b.module').then(m => m.ModBModule),
  //   icon: 'k-i-textbox-hidden'
  // },
  // {
  //   path: 'mod-c',
  //   text: 'Module C',
  //   loadChildren: () => import('modules/module-c/mod-c.module').then(m => m.ModCModule),
  //   icon: 'k-i-module-manager'
  // },
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
