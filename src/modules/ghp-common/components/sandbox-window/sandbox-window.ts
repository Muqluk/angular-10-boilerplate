/* 
  eslint-disable
    @typescript-eslint/no-explicit-any
*/
import { 
  Component, 
  ContentChildren, 
  QueryList, 
  ViewEncapsulation,
} from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'sandbox-window',
  styleUrls: ['sandbox-window.scss'],
  templateUrl: 'sandbox-window.html',
})
export class SandboxWindow {
  @ContentChildren('child', { descendants: true }) Children: QueryList<any>;
}
