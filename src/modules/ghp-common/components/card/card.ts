import {
  ContentChild,
  ContentChildren,
  Component,
  QueryList,
} from "@angular/core";
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

  MinMaxContentHandler(isMin: boolean): void {
    this.minimizeContent = isMin;
  }

}

export {
  Card,
  CardHeader,
}