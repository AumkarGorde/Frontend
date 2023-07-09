import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'grid-ui',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  // store columns
  gridColumns: Array<Object> = new Array<Object>();
  // store data per row
  gridData: Array<Object> = new Array<Object>();

  @Input('grid-column') // coming from customer UI
  set setGridColumn(_gridColumns: Array<Object>) {
    this.gridColumns = _gridColumns;
  }

  @Input('grid-data') // coming from customer UI
  set setGridData(_gridData: Array<Object>) {
    this.gridData = _gridData;
    console.log(this.gridData);
  }

  //going to customer ui
  @Output('grid-select') eventGridEmitter: EventEmitter<Object> =
    new EventEmitter<Object>();

  SelectGrid(_selected: Object) {
    // send the selected object to UI where this component is running
    this.eventGridEmitter.emit(_selected);
  }
}
