import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Subscription } from 'rxjs';
import { FirmService } from 'src/app/services/firm/firm.service';
import { FsGridComponent } from 'src/app/common/fs-grid/fs-grid.component';
import { FIRM_COLUMN } from './firm.constant';

@Component({
  selector: 'app-basic-table',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatCardModule, FsGridComponent],
  templateUrl: './basic-table.component.html'
})
export class AppBasicTableComponent implements OnInit {
  private subscription: Subscription;
  numberOfFirms: any;
  firmData: any[];
  isLoading: boolean;
  isInline: boolean;
  notifier: any;
  constructor(
    breakpointObserver: BreakpointObserver,
    private firmService: FirmService
  ) {}

  ngOnInit(): void {
    this.getFirms();
  }

  parentColumnDefs = FIRM_COLUMN;

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

  parentRowData = [
    { make: 'Toyota', model: 'Celica', price: 35000, electric: true },
    { make: 'Ford', model: 'Mondeo', price: 32000, electric: false },
    { make: 'Porsche', model: 'Boxster', price: 72000, electric: true },
    { make: 'Toyota', model: 'Celica', price: 35000, electric: true },
    { make: 'Ford', model: 'Mondeo', price: 32000, electric: false },
    { make: 'Porsche', model: 'Boxster', price: 72000, electric: true },
    { make: 'Toyota', model: 'Celica', price: 35000, electric: true },
    { make: 'Ford', model: 'Mondeo', price: 32000, electric: false },
    { make: 'Porsche', model: 'Boxster', price: 72000, electric: true },
    { make: 'Toyota', model: 'Celica', price: 35000, electric: true },
    { make: 'Ford', model: 'Mondeo', price: 32000, electric: false },
    { make: 'Porsche', model: 'Boxster', price: 72000, electric: true },
    { make: 'Toyota', model: 'Celica', price: 35000, electric: true },
    { make: 'Ford', model: 'Mondeo', price: 32000, electric: false },
    { make: 'Porsche', model: 'Boxster', price: 72000, electric: true },
    { make: 'Toyota', model: 'Celica', price: 35000, electric: true },
    { make: 'Ford', model: 'Mondeo', price: 32000, electric: false },
    { make: 'Porsche', model: 'Boxster', price: 72000, electric: true },
    { make: 'Toyota', model: 'Celica', price: 35000, electric: true },
    { make: 'Ford', model: 'Mondeo', price: 32000, electric: false },
    { make: 'Porsche', model: 'Boxster', price: 72000, electric: true },
    { make: 'Toyota', model: 'Celica', price: 35000, electric: true },
    { make: 'Ford', model: 'Mondeo', price: 32000, electric: false },
    { make: 'Porsche', model: 'Boxster', price: 72000, electric: true },
    { make: 'Toyota', model: 'Celica', price: 35000, electric: true },
    { make: 'Ford', model: 'Mondeo', price: 32000, electric: false },
    { make: 'Porsche', model: 'Boxster', price: 72000, electric: true },
    { make: 'Toyota', model: 'Celica', price: 35000, electric: true },
    { make: 'Ford', model: 'Mondeo', price: 32000, electric: false },
    { make: 'Porsche', model: 'Boxster', price: 72000, electric: true },
    { make: 'Toyota', model: 'Celica', price: 35000, electric: true },
    { make: 'Ford', model: 'Mondeo', price: 32000, electric: false },
    { make: 'Porsche', model: 'Boxster', price: 72000, electric: true },
    { make: 'Toyota', model: 'Celica', price: 35000, electric: true },
    { make: 'Ford', model: 'Mondeo', price: 32000, electric: false },
    { make: 'Porsche', model: 'Boxster', price: 72000, electric: true },
    { make: 'Toyota', model: 'Celica', price: 35000, electric: true },
    { make: 'Ford', model: 'Mondeo', price: 32000, electric: false },
    { make: 'Porsche', model: 'Boxster', price: 72000, electric: true },
    { make: 'Toyota', model: 'Celica', price: 35000, electric: true },
    { make: 'Ford', model: 'Mondeo', price: 32000, electric: false },
    { make: 'Porsche', model: 'Boxster', price: 72000, electric: true },
    { make: 'Toyota', model: 'Celica', price: 35000, electric: true },
    { make: 'Ford', model: 'Mondeo', price: 32000, electric: false },
    { make: 'Porsche', model: 'Boxster', price: 72000, electric: true },
    { make: 'Toyota', model: 'Celica', price: 35000, electric: true },
    { make: 'Ford', model: 'Mondeo', price: 32000, electric: false },
    { make: 'Porsche', model: 'Boxster', price: 72000, electric: true },
    { make: 'Toyota', model: 'Celica', price: 35000, electric: true },
    { make: 'Ford', model: 'Mondeo', price: 32000, electric: false },
    { make: 'Porsche', model: 'Boxster', price: 72000, electric: true },
    { make: 'Toyota', model: 'Celica', price: 35000, electric: true },
    { make: 'Ford', model: 'Mondeo', price: 32000, electric: false },
    { make: 'Porsche', model: 'Boxster', price: 72000, electric: true }
  ];
}
