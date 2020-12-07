/* eslint-disable */

import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  ViewChild
} from "@angular/core";

import {
  ColumnComponent,
  GridComponent,
  ScrollMode
} from "@progress/kendo-angular-grid";

import {
  State,
  DataResult
} from "@progress/kendo-data-query";

interface ColumnSettings {
  field: string;
  title?: string;
  filter?: 'string' | 'numeric' | 'date' | 'boolean';
  format?: string;
  width?: number;
  _width?: number;
  filterable: boolean;
  orderIndex?: number;
}

interface GridSettings {
  columnsConfig: ColumnSettings[];
  state: State;
  gridData?: DataResult;
}


@Component({
  selector: 'genesis-grid',
  styleUrls: ['grid.scss'],
  templateUrl: 'grid.html',
})
class Grid {
  @HostBinding('class.g-grid-component') useClass: boolean = true;

  @ViewChild("gridRef") set _gridRef(ref: GridComponent) {
    console.log(ref);
  }
  @Output() selections = new EventEmitter();

  @Input() data: Array<any> = [];
  @Input() columns: Array<any> = [];
  @Input() loading: boolean = false;
  @Input() pageable: boolean = false;
  @Input() pageSize: number = 50;
  @Input() height: number = 250;
  @Input() scrollable: ScrollMode = 'scrollable';

  onColumnResize(evt: any) {
    const { column, newWidth } = evt[0];
    console.log(`${column.title}: ${newWidth}`);
  }
}

export {
  Grid,
}