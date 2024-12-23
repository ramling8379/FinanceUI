import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Subscription } from 'rxjs';
import { FirmService } from 'src/app/services/firm/firm.service';
import { FsGridComponent } from 'src/app/common/fs-grid/fs-grid.component';
import { FIRM_COLUMN } from './firm.constant';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'app-basic-table',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    FsGridComponent,
    MaterialModule,
    TablerIconsModule
  ],
  templateUrl: './firm-list.component.html',
  styleUrls: ['./firm-list.component.scss']
})
export class AppBasicTableComponent implements OnInit {
  private subscription: Subscription;
  numberOfFirms: any;
  firmData: any[];
  isLoading: boolean;
  isInline: boolean;
  notifier: any;
  parentColumnDefs = FIRM_COLUMN;
  constructor(private firmService: FirmService) {}

  ngOnInit(): void {
    this.getFirms();
  }

  getFirms(): void {
    this.subscription = this.firmService.getFirms(0).subscribe(
      (firmData: { content: any; totalElements: any }) => {
        this.firmData = firmData.content;
      },
      (error: any) => {
        console.log(error);
        this.isLoading = this.isInline = false;
      }
    );
  }
  offset(offset: any) {
    throw new Error('Method not implemented.');
  }

  onEdit(rowData: any): void {
    console.log('======edit=====' + rowData.id);
  }

  onDelete(rowData: any): void {
    console.log('=====delete======' + rowData.id);
  }
}
