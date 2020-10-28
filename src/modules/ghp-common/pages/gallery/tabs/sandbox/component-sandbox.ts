/* 
  eslint-disable
    @typescript-eslint/no-explicit-any
*/
import { Component, ContentChildren, QueryList, ViewEncapsulation } from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'component-sandbox',
  styleUrls: ['component-sandbox.scss'],
  templateUrl: 'component-sandbox.html',
})
export class ComponentSandbox {
  @ContentChildren('child', { descendants: true }) Children: QueryList<any>;
}
