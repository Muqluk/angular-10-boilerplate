import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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

import {
  Card,
  CardHeader,
  Label,
  SandboxWindow,
  TextBox,
  Toolbar,
} from "./components"

import { ComponentSandbox, GalleryPage } from "./pages/gallery/gallery-page";
import { IconViewerPage } from "./pages/icon-viewer/icon-viewer";

const routePrefix = 'gallery'

export const ModuleRoutes = [
  { path: '', component: GalleryPage },
  { path: `${routePrefix}/icons`, icon: 'k-i-image', pathMatch: 'full', component: IconViewerPage, text: 'Icons' },
]


@NgModule({
  declarations: [
    Card,
    CardHeader,
    GalleryPage,
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
    IconViewerPage,
    Label,
    SandboxWindow,
    TextBox,
    Toolbar,
  ],
  imports: [
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
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GhpCommonModule { }
