import {
  AfterViewChecked,
  ContentChild,
  ContentChildren,
  Component,
  ElementRef,
  HostBinding,
  QueryList,
  ViewChild,
} from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { CardHeader } from "./card-header/card-header";

@Component({
  selector: 'genesis-card',
  styleUrls: ['./card.scss'],
  templateUrl: './card.html',
})
class Card {
  @ContentChild(CardHeader) Header!: CardHeader;
  @ContentChildren('', { descendants: true }) CardContent: QueryList<any>;

  public minimizeContent: boolean = false;
  public contentHeight: number = 250;

  MinMaxContentHandler(isMin: boolean): void {
    this.minimizeContent = isMin;
  }
  ngAfterViewChecked() { }

}

export {
  Card,
  CardHeader,
}