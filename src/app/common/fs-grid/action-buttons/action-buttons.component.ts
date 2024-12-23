import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'action-buttons',
  standalone: true,
  imports: [TablerIconsModule, MaterialModule],
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements ICellRendererAngularComp {
  params: any;
  refresh(
    params: import('ag-grid-community').ICellRendererParams<any, any, any>
  ): boolean {
    return false;
  }

  agInit(params: any): void {
    this.params = params;
  }

  onEdit(): void {
    const rowData = this.params.node.data;
    this.params.onEdit(rowData);
  }

  onDelete(): void {
    const rowData = this.params.node.data;
    this.params.onDelete(rowData);
  }
}
