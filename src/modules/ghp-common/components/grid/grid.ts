import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from "@angular/core";

import { ColumnComponent, GridComponent } from "@progress/kendo-angular-grid";
import { State, DataResult } from "@progress/kendo-data-query";

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
class Grid implements AfterViewInit, OnInit {
  @ViewChild("gridRef") gridRef: GridComponent;
  //#region Data and Behaviors
  @Output() selections = new EventEmitter();

  @Input() data: Array<any> = []; // eslint-disable-line
  @Input() loading: boolean = false;
  @Input() pageable: boolean = true;
  @Input() pageSize: number = 250;

  //#endregion

  //#region Something

  @Input() height: number = 50;

  //#endregion

  //#region Events


  columnVisibilityChange(cols: any): void {// eslint-disable-line
    console.log(cols); // eslint-disable-line
  }


  //#endregion

  ngOnInit(): void {
    // nothing
  }

  ngAfterViewInit(): void {
    // const cols = this.gridRef.columns;
    // console.log("gridRef.columns:", cols.toArray()); // eslint-disable-line
  }

  clikity(grid: GridComponent): void { 
    const cols = grid.columns.toArray();
    console.log("gridRef.columns:", cols); // eslint-disable-line
  }
}

export {
  Grid,
}