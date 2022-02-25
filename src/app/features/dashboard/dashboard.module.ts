import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEchartsModule } from 'ngx-echarts';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GMapModule } from 'primeng/gmap';

@NgModule({
  declarations: [HomeComponent, ContactComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GMapModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
})
export class DashbordModule {}
