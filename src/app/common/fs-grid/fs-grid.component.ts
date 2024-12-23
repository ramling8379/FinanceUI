import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';

@Component({
  selector: 'fs-grid',
  standalone: true,
  imports: [MatCardModule, AgGridModule, ActionButtonsComponent],
  templateUrl: './fs-grid.component.html',
  styleUrls: ['./fs-grid.component.scss']
})
export class FsGridComponent implements OnInit {
  @Input() columns: any = [];
  @Input() rowData: any = [];
  @Input() filter = true;
  @Input() sortable = true;
  @Input() resizable = true;
  @Input() floatingFilter = true;
  @Output() editEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();
  columnDefs: ColDef[] = [];
  constructor() {}
  ngOnInit(): void {
    if (this.isColDefArray(this.columns)) {
      this.columnDefs = this.columns as ColDef[]; // Safe to assign after validation
      this.columnDefs.push({
        headerName: 'Actions',
        filter: false,
        flex: 0.5,
        cellRenderer: 'actionButtonsRenderer', // Use the custom action button component
        cellRendererParams: {
          onEdit: this.onEdit.bind(this),
          onDelete: this.onDelete.bind(this)
        }
      });
    } else {
      console.error('Invalid array structure');
    }
  }

  defaultColDef: ColDef = {
    flex: 1,
    filter: this.filter, // Enables filtering for all columns by default
    sortable: this.sortable, // Enables sorting for all columns by default
    resizable: this.resizable, // Allows resizing of all columns by default
    floatingFilter: this.floatingFilter
  };

  isColDefArray(input: any[]): input is ColDef[] {
    return input.every(
      item =>
        typeof item.field === 'string' && typeof item.headerName === 'string' // Check required properties
    );
  }

  frameworkComponents = {
    actionButtonsRenderer: ActionButtonsComponent // Register the action button renderer
  };

  onEdit(rowData: any): void {
    this.editEvent.emit(rowData);
  }

  onDelete(rowData: any): void {
    this.deleteEvent.emit(rowData);
  }
}
