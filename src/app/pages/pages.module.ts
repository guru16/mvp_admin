import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardContainerComponent} from './dashboard/dashboard-container/dashboard-container.component';
import { UsersComponent } from './users/users.component';
import { CMSComponent } from './cms/cms.component';
import { SubscriptionComponent } from './subscription/subscription.component'
import { SidebarComponent } from '../shared';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    DashboardContainerComponent,
    UsersComponent,
    CMSComponent,
    SubscriptionComponent,
    SidebarComponent
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
