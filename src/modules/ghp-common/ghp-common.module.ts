import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule, DropDownListModule } from "@progress/kendo-angular-dropdowns";
import { InputsModule } from '@progress/kendo-angular-inputs';
import { TabStripModule } from "@progress/kendo-angular-layout";
import { GridModule, ExcelModule, PDFModule } from "@progress/kendo-angular-grid";
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { ListViewModule } from '@progress/kendo-angular-listview';

import { GalleryPage, IconViewerPage } from "./pages";
import { ComponentSandbox } from "./pages/gallery/tabs/sandbox/component-sandbox";

const routePrefix = 'gallery'

export const ModuleRoutes = [
  { path: '', component: GalleryPage },
  { path: `${routePrefix}/icons`, icon: 'k-i-image', pathMatch: 'full', component: IconViewerPage, text: 'Icons' },
]


@NgModule({
  declarations: [
    GalleryPage,
    IconViewerPage,
    ComponentSandbox,
  ],
  entryComponents: [
    GalleryPage,
    IconViewerPage,
  ],
  exports: [
    GalleryPage,
    IconViewerPage,
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
