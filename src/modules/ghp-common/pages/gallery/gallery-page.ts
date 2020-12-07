import { Component, ViewEncapsulation } from "@angular/core";
import { ComponentSandbox } from "./tabs/component-sandbox/component-sandbox";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'gallery-page',
  styleUrls: ['gallery-page.scss'],
  templateUrl: 'gallery-page.html'
})
class GalleryPage { }

export {
  ComponentSandbox,
  GalleryPage,
}
