import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css'],
})
export class RadarComponent implements OnInit {
  public options: any;
  constructor() {}

  ngOnInit(): void {
    this.options = {
      title: {
        text: 'Basic Radar Chart',
        textStyle: {
          fontSize: 12,
        },
      },
      legend: {
        data: ['Allocated Budget', 'Actual Spending'],
        left: '74%',
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: 'Sales', max: 6500 },
          { name: 'Administration', max: 16000 },
          { name: 'Information Technology', max: 30000 },
          { name: 'Customer Support', max: 38000 },
          { name: 'Development', max: 52000 },
          { name: 'Marketing', max: 25000 },
        ],
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Allocated Budget',
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: 'Actual Spending',
            },
          ],
        },
      ],
    };
  }
}
