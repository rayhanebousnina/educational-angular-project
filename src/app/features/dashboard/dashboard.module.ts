import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEchartsModule } from 'ngx-echarts';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DonutComponent } from './home/donut/donut.component';
import { BarComponent } from './home/bar/bar.component';
import { RadarComponent } from './home/radar/radar.component';
import { LineComponent } from './home/line/line.component';

@NgModule({
  declarations: [HomeComponent, DonutComponent, BarComponent, RadarComponent, LineComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
})
export class DashbordModule {}
