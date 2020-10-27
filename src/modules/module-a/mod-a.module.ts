import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
// import { GhpCommonModule } from "modules/ghp-common/ghp-common.module";

import { HomePage } from "./pages/home/home-page";
import { Page1 } from "./pages/page-1/page-1";
import { Page2 } from "./pages/page-2/page-2";
import { Page3 } from "./pages/page-3/page-3";

const rtes = [
  { path: '', pathMatch: 'full', component: HomePage },
  { path: 'page-1', pathMatch: 'full', component: Page1 },
  { path: 'page-2', pathMatch: 'full', component: Page2 },
  { path: 'page-3', pathMatch: 'full', component: Page3 },
]

@NgModule({
  declarations: [
    Page1,
    Page2,
    Page3,
  ],
  exports: [],
  imports: [
    // GhpCommonModule,
    RouterModule.forChild(rtes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModAModule { }