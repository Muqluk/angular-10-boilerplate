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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
