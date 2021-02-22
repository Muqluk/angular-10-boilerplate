//#region dependency Imports
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS, } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//#endregion

//#region Kendo Imports
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule, DropDownListModule } from "@progress/kendo-angular-dropdowns";
import { InputsModule } from '@progress/kendo-angular-inputs';
import { TabStripModule } from "@progress/kendo-angular-layout";
import { GridModule, ExcelModule, PDFModule } from "@progress/kendo-angular-grid";
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { ListViewModule } from '@progress/kendo-angular-listview';
//#endregion

//#region Component Imports
import {
  Card,
  CardHeader,
  Grid,
  Label,
  SandboxWindow,
  TextBox,
  Toolbar,
} from "./components"
//#endregion

//#region Page Imports
import { ComponentSandbox, GalleryPage } from "./pages/gallery/gallery-page";
import { IconViewerPage } from "./pages/icon-viewer/icon-viewer";
//#endregion

//#region Providers
import { RestProvider } from "./provider";
//#endregion

//#region Route Configuration
const routePrefix = 'gallery'

export const ModuleRoutes = [
  { path: '', component: GalleryPage },
  {
    path:
      `${routePrefix}/icons`,
    icon: 'k-i-image',
    pathMatch: 'full',
    component: IconViewerPage,
    text: 'Icons'
  },
]
//#endregion


@NgModule({
  declarations: [
    Card,
    CardHeader,
    GalleryPage,
    Grid,
    ComponentSandbox,
    IconViewerPage,
    SandboxWindow,
    Label,
    TextBox,
    Toolbar,
  ],
  entryComponents: [
    GalleryPage,
    IconViewerPage,
  ],
  exports: [
    Card,
    CardHeader,
    GalleryPage,
    Grid,
    IconViewerPage,
    Label,
    SandboxWindow,
    TextBox,
    Toolbar,
  ],
  imports: [
    HttpClientJsonpModule,
    HttpClientModule,
    ButtonsModule,
    CommonModule,
    DateInputsModule,
    DialogsModule,
    DropDownsModule,
    DropDownListModule,
    ExcelModule,
    FormsModule,
    GridModule,
    InputsModule,
    PDFModule,
    ReactiveFormsModule,
    ScrollViewModule,
    TabStripModule,
    ListViewModule,
    RouterModule.forChild(ModuleRoutes),
    // RouterModule.forChild([{ path: '', component: GalleryPage }]),
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: InterceptorProvider,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AddCsrfHeaderInterceptorService,
    //   multi: true
    // },
  ],
  providers: [RestProvider],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GhpCommonModule { }
