import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LayoutComponent } from './layout/layout.component';
import { CoreComponent } from './core/core.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './core/admin/admin.component';
import { UserComponent } from './core/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select'
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LayoutComponent,
    CoreComponent,
    SidebarComponent,
    NavbarComponent,
    AdminComponent,
    UserComponent,
    
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatSelectModule ,TableModule,
    DropdownModule,
    ButtonModule,
    MatInputModule, FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
