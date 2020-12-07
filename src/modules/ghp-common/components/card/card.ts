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
  animations: [
    trigger('showHideContent', [
      state('true', style({
        height: 0,
      })),
      state('false', style({
        height: '*',
      })),
      transition('true => false', animate('.5s linear')),  // animation timing
      transition('false => true', animate('.5s linear'))
    ])
  ],
})
class Card {
  @ContentChild(CardHeader) Header!: CardHeader;
  @ContentChildren('', { descendants: true }) CardContent: QueryList<any>;
  @ViewChild("contentContainer") contentContainer: ElementRef;

  public minimizeContent: boolean = false;
  public contentHeight: number = 250;

  MinMaxContentHandler(isMin: boolean): void {
    this.minimizeContent = isMin;
  }
  ngAfterViewInit() {
    this.contentHeight = (<HTMLElement>this.contentContainer.nativeElement).getBoundingClientRect().height;
  }

}

export {
  Card,
  CardHeader,
}