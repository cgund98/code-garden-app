import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MiscCompsModule } from '../misc/misc-comps.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { CoursePageModule } from '../courses/course-page.module';
import { DashboardShowPageComponent } from './dashboard-show-page.component';

import { DASHBOARD_ELEMENTS_DECLARATIONS } from './dashboard-elements';

@NgModule({
  imports: [
    BrowserModule,
    MiscCompsModule,
    CoursePageModule,
    NgxPaginationModule,
  ],
  declarations: [
    DashboardShowPageComponent,
    ...DASHBOARD_ELEMENTS_DECLARATIONS,
  ],
  entryComponents: [
    DashboardShowPageComponent,
  ],
  exports: [
    DashboardShowPageComponent,
  ]
})

export class DashboardPageModule {}
