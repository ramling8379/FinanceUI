import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppBasicTableComponent } from '../fs/basic-table/basic-table.component';
import { TablesRoutes } from './tables.routes';

// tables components

@NgModule({
  imports: [RouterModule.forChild(TablesRoutes), AppBasicTableComponent],
  declarations: []
})
export class TablesModule {}
