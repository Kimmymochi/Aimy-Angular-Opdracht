import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass'],
})
export class ChartComponent {
  methodChart: any;
  statusChart: any;

  // Default Options for both charts
  defaultColors: any = [
    '#8789AB', // purple-50
    '#FED1CF', // salmon-50
    '#FDD783', // mustard-50
    '#80CFCF', // ocean-50
    '#80BFA7', // forest-50
    '#EE8181', //error-70
  ];

  defaultOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 0.75,
    maxBarThickness: 125,

    scales: {
   
      x: {
        grid: {
          display: false 
        },

        ticks: {
          font: {
            size: 14
          },
        },
  
        title: {
          display: true,
          padding: 14,
          font: {
            size: 14,
            weight: '700'
          },
        },
      },

      y: {
        beginAtZero: true,
        border: {
          display: false
        },
      },

      
    },

    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'top',
        font: {
          size: 14,
          weight: '700',
        },
      },

      legend: {
        display: false,
      },

      title: {
        display: true,
        padding: 24,
        align: 'start',
        font: {
          size: 14,
          weight: '700',
        },
      },
    },
  };

  methodOptions: any = JSON.parse(JSON.stringify(this.defaultOptions));
  statusOptions: any = JSON.parse(JSON.stringify(this.defaultOptions));

  createChart() {
    // Global Chart Values
    Chart.defaults.font.family = 'Montserrat';
    Chart.defaults.color = '#121212';
    Chart.defaults.locale = 'nl-NL';
    Chart.register(ChartDataLabels);

    // Method Chart
    this.methodOptions.scales.x.title.text = 'Betaalmethoden';
    this.methodOptions.scales.y.max = 10000;

    this.methodChart = new Chart('methodChart', {
      type: 'bar',
      data: {
        labels: [
          'Pin',
          'Credit-Card',
          'Betaalverzoek',
          'iDEAL',
          'Apple Pay',
          'Abonnement',
        ],

        datasets: [
          {
            label: 'Euro',
            data: [9000, 8000, 7500, 5000, 3600, 2500],
            backgroundColor: this.defaultColors,

            datalabels: {
              formatter: function (value: any, context: any) {
                return '€ ' + value;
              },
            },
          },
        ],
      },
      options: this.methodOptions,
    });

    // Status Chart
    this.statusOptions.plugins.title.text = 'Aantal';
    this.statusOptions.scales.x.title.text = 'Status';
    this.statusOptions.scales.y.max = 100;
    this.statusChart = new Chart('statusChart', {
      type: 'bar',

      data: {
        labels: [
          'Betaald',
          'Open',
          'In proces',
          'Verzoek gestuurd',
          'Terugstorting',
        ],

        datasets: [
          {
            label: 'Aantal',
            data: [90, 90, 90, 90, 90],
            backgroundColor: this.defaultColors,
          },
        ],
      },
      options: this.statusOptions,
    });
  }

  ngOnInit(): void {
    this.createChart();
  }
}