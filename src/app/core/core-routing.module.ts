import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { TransComponent } from './trans/trans.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    
    children: [
      {
        path: 'user',
    component: UserComponent,
      },
      {
        path: 'admin',
    component: AdminComponent,
      },
      {
        path: 'transaction',
    component: TransComponent,
      },
      {
        path: 'userdashboard',
    component: UserdashboardComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
