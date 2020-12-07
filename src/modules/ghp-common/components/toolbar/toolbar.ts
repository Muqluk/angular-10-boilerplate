import { Component, ContentChildren, QueryList, ViewEncapsulation } from "@angular/core";


@Component({
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'genesis-toolbar',
  styleUrls: ['toolbar.scss'],
  templateUrl: 'toolbar.html'
})
export class Toolbar {
  @ContentChildren('child') ToolbarItems: QueryList<any>;
}