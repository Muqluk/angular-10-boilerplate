import { Component, Input } from "@angular/core";

@Component({
  selector: 'genesis-label',
  styleUrls: ['label.scss'],
  templateUrl: 'label.html',
})
export class Label {
  @Input() Label: string = "";
}