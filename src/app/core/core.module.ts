import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TransComponent } from './trans/trans.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { BorrowComponent } from './borrow/borrow.component';

@NgModule({
  declarations: [
    TransComponent,
    UserdashboardComponent,
    BorrowComponent,
  ],
  imports: [
    CommonModule,TableModule,
    DropdownModule,
    ButtonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
