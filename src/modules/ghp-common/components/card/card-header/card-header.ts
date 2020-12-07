import {
  ContentChildren,
  Component,
  EventEmitter,
  Input,
  QueryList,
  Output,
} from "@angular/core";

@Component({
  selector: 'genesis-card-header',
  styleUrls: ['../card.scss'],
  templateUrl: './card-header.html',
})
export class CardHeader {
  @ContentChildren('', { descendants: true }) HeaderContent: QueryList<any>;

  @Output() MinMaxContent = new EventEmitter<boolean>();
  @Input() CardTitle: string = "Test Card";
  private isMin: boolean = false;

  public get contentToggleIcon(): string {
    return this.isMin
      ? 'k-i-window'
      : 'k-i-window-minimize';
  }

  minMaxToggle(): void {
    this.isMin = !this.isMin;
    this.MinMaxContent.emit(this.isMin);
  }
}